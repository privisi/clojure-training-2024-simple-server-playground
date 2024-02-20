(ns simple-server.server
  (:require
   [clojure.string :as str]
   [compojure.core        :refer [ANY defroutes GET POST OPTIONS]]
   [ring.middleware.defaults  :as middleware]
   [ring.middleware.json :refer [wrap-json-response]]
   [ring.middleware.cookies   :as cookies]
   [ring.middleware.multipart-params :as multi]
   [ring.mock.request         :as mock]
   [ring.util.response        :as ring
    :refer [not-found redirect response status]]
   [simple-server.simple-game :as game]
   [simple-server.db          :as db]))

(defn set-session-cookie [response user-id]
  (let [cookie-value (str user-id)] ; Generate a simple cookie value based on the user ID
    (ring/set-cookie response "token" cookie-value {:max-age 3600}))) ; Set cookie with a maximum age of 1 hour

(defn get-session-cookie [request]
  (get-in request [:cookies "token" :value]))

(defn validate-user-credentials [username password]
  (let [user-id         (:user_id  (first (db/get-user-id username))) 
        stored-password (:password (first (db/get-password user-id)))]
    (= password stored-password)))

(defn login-api-handler [request]
  (let [params (get request :params)
        username (:username params)
        password (:password params)]
    (if (validate-user-credentials username password)
      (let [user-id (-> (first (db/get-user-id username))
                        :user_id)]
        (db/create-tables-if-not-existing)
        (game/new-game! user-id)
        (-> (response {:status "success", :message "Login successful"})
            (set-session-cookie user-id)))
      (response {:status "error", :message "Invalid login. Try again."}))))

(defn start-game-api-handler [request]
  (let [token  (Integer/parseInt (get-session-cookie request))]
    (if (nil? token)
      (response {:status "error", :message "Unauthorized"})
      (do (game/new-game! token)
          (response {:status "success", :message "Game started."})))))

(defn guess-api-handler [request]
  (let [params (get request :params)
        guess  (Integer/parseInt (:guess params))
        token  (Integer/parseInt (get-session-cookie request))]
    (if (nil? token)
      (response {:status "error", :message "Unauthorized"})
      (if (contains? db/get-playing-users token)
        (let [result         (game/guess-answer guess token)
              state-response  #(response {:status "success", :game-state result, :message %})]
          (case result
            :game-win  (state-response "Congratulations! You win!")
            :game-over (state-response "Too bad! You ran out of tries!")
            :too-low   (state-response (str "Too low! "  (:tries_left (first (db/get-remaining-tries token))) " tries remaining!"))
            :too-high  (state-response (str "Too high! " (:tries_left (first (db/get-remaining-tries token))) " tries remaining!"))))))))



(defroutes site-routes
  (POST "/api/login"         request                     (login-api-handler request))
  (POST "/api/start"         request                     (start-game-api-handler request))
  (POST "/api/guess"         request                     (guess-api-handler request))
  (ANY  "*"                  []                          (not-found (str "Sorry, no such URI on this server!"))))

(defn add-content-type-json-header [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (ring/header "Content-Type" "application/json")))))


(def handler
  (-> site-routes
      (middleware/wrap-defaults middleware/api-defaults)
      (add-content-type-json-header)
      (multi/wrap-multipart-params)
      (wrap-json-response)
      (cookies/wrap-cookies)))


(comment
  (handler (mock/request :get "/new-game"))
  (handler (mock/request :get "/guess?guess=3"))
  (handler (mock/request :get "/dunno")))

