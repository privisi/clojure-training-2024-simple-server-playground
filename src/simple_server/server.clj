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


(defn new-game-handler [request]
  (when (game/new-game! (get-session-cookie request))
    (response (str "OK - start guessing at /guess/?guess=N"))))


(defn validate-user-credentials [username password]
  (let [user-id-map (first (db/get-user-id username))
        user-id (:user_id user-id-map)
        password-map (first (db/get-password user-id))
        stored-password (:password password-map)]
    (= password stored-password)))

(defn login-api-handler [request]
  (let [params (get request :params)
        username (:username params)
        password (:password params)]
    (println "got params:" username password ", validating: " (validate-user-credentials username password))
    (if (validate-user-credentials username password)
      (let [user-id (-> (first (db/get-user-id username))
                        :user_id)]
        (db/create-tables-if-not-existing)
        (game/new-game! user-id)
        (-> (response {:status "success", :message "Login successful"})
            (set-session-cookie user-id)))
      (response {:status "error", :message "Invalid login. Try again."}))))

(defn start-game-api-handler [request]
  (println request)
  (let [token  (Integer/parseInt (get-session-cookie request))]
    (println "got params:" token)
    (if (nil? token)
      (response {:status "error", :message "Unauthorized"})
      (do (db/create-tables-if-not-existing)
          (db/make-default-users)  ; to make SURE the database has test users.
          (game/new-game! token)
          (response {:status "success", :message "Game started."})))))

(defn guess-api-handler [request]
  (let [params (get request :params)
        guess  (Integer/parseInt (:guess params))
        token  (Integer/parseInt (get-session-cookie request))]
    (println "got params: " guess token)
    (if (nil? token)
      (response {:status "error", :message "Unauthorized"})
      (let [result (game/guess-answer guess token)]
        (case result
          :game-win  (response {:status "success", :game-state result, :message "Congratulations! You win!"})
          :game-over (response {:status "success", :game-state result, :message "Too bad! You ran out of tries!"})
          :too-low   (response {:status "success", :game-state result, :message (str "Too low! "  (:tries_left (first (db/get-remaining-tries token))) " tries remaining!")})
          :too-high  (response {:status "success", :game-state result, :message (str "Too high! " (:tries_left (first (db/get-remaining-tries token))) " tries remaining!")}))))))



(defroutes site-routes
  (POST "/api/login"         request                     (login-api-handler request))
  (POST  "/api/start"         request                     (start-game-api-handler request))
  (POST "/api/guess"         request                     (guess-api-handler request))
  (ANY  "*"                  []                          (not-found (str "Sorry, no such URI on this server!"))))

(defn add-content-type-htmltext-header [handler]
  (fn [request]
    (let [response (handler request)]
      (println response)
      (-> response
          (ring/header "Content-Type" "application/json")))))


(def handler
  (-> site-routes
      (middleware/wrap-defaults middleware/api-defaults)
      (add-content-type-htmltext-header)
      (multi/wrap-multipart-params)
      (wrap-json-response)
      (cookies/wrap-cookies)))


(comment
  (handler (mock/request :get "/new-game"))
  (handler (mock/request :get "/guess?guess=3"))
  (handler (mock/request :get "/dunno")))

