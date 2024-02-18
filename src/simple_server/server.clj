(ns simple-server.server
  (:require 
   [clojure.string :as str]
   [compojure.coercions   :refer [as-int]]
   [compojure.core        :refer [ANY defroutes GET POST OPTIONS]]
   [compojure.route           :as route]
   [ring.adapter.jetty    :refer [run-jetty]]
   [ring.middleware.defaults  :as middleware]
   [ring.middleware.json :refer [wrap-json-response]]
   [ring.middleware.cookies   :as cookies]
   [ring.middleware.multipart-params :as multi]
  ;;  [ring.middleware.cors :refer [wrap-cors]]
   [ring.mock.request         :as mock]
   [ring.util.response        :as ring
    :refer [not-found redirect response status]]
   [simple-server.simple-game :as game]
   [simple-server.db          :as db]
   [byte-transforms           :as transforms]
   [clojure.pprint :as pprint]))

;; (defn random-api []
;;   (println "I've been called!")
;;   {:status 200
;;    :body (pr-str {:lucky-number (rand-int 1000)
;;                   :a-set #{1 "foo" :baz [::a ::b]}})
;;    :headers {"Content-Type" "application/edn"}})

(defn set-session-cookie [response user-id]
  (let [cookie-value (str user-id)] ; Generate a simple cookie value based on the user ID
    (ring/set-cookie response "token" cookie-value {:max-age 3600}))) ; Set cookie with a maximum age of 1 hour

(defn get-session-cookie [request]
  (get-in request [:cookies "token" :value]))


(defn new-game-handler [request]
  (when (game/new-game! (get-session-cookie request))
    (response (str "OK - start guessing at /guess/?guess=N"))))


;; (defn valid-login? [token password] ;; placeholder login logic...
;;   (or (and (= token "foo") (= password "bar"))
;;       (and (= token "admin") (= password "123"))
;;       (and (= token "user") (= password "pass"))
;;       (and (= token "egg") (= password "man"))
;;       (and (= token "test") (= password "test"))))

;; ;; tried to combine these functions but the login page is very fragile
;; (defn login-page-handler []
;;   (response (slurp "resources/public/login.html")))
;; ;; (defn guess-page-handler []
;; ;;   (response (slurp "res/guess.html")))


(defn validate-user-credentials [username password]
  (let [user-id-map (first (db/get-user-id username)) 
        user-id (:user_id user-id-map)                 
        password-map (first (db/get-password user-id))
        stored-password (:password password-map)]
    (= password stored-password)))

(defn random-api []
  (println "I've been called!")
  {:status 200
   :body (pr-str {:lucky-number (rand-int 1000)
                  :a-set #{1 "foo" :baz [::a ::b]}})
   :headers {"Content-Type" "application/edn"}})

(defn login-api-handler [request]
  ;; (println request)
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

(defn guess-api-handler [request]
  ;; (println request)
  (let [params (get request :params)
        guess  (Integer/parseInt (:guess params))
        token  (Integer/parseInt (get-session-cookie request))]
    (println "got params: " guess token)
    (if (nil? token)
      (response {:status "error", :message "Unauthorized"})
      (let [result (game/guess-answer guess token)]
        (case result
          :game-win  (response {:status "success", :message "Congratulations! You win!"})
          :game-over (response {:status "success", :message "Too bad! You ran out of tries!"})
          :too-low   (response {:status "success", :message (str "Too low! "  (:tries_left (first (db/get-remaining-tries token))) " tries remaining!")})
          :too-high  (response {:status "success", :message (str "Too high! " (:tries_left (first (db/get-remaining-tries token))) " tries remaining!")}))
        ;; (response {:status "success", :message (name result), :tries-left (:tries_left (first (db/get-remaining-tries token)))})
        ))))



(defroutes site-routes

  ;; (GET  "/login"             []                          (login-page-handler))
  ;; (POST "/login"             request                     (login-handler request))
  (POST "/api/login"         request                     (login-api-handler request))
  (POST "/api/guess"         request                     (guess-api-handler request)) 
  (POST  "/api/random"        []                          (random-api))
  
  ;; (OPTIONS "*"               []                          {}) ;; handle preflight requests
 
  ;; (OPTIONS "*" [] (fn [request]
  ;;                   (-> (response "")
  ;;                       (ring/header "Access-Control-Allow-Origin" "http://localhost:9500")
  ;;                       (ring/header "Access-Control-Allow-Methods" "POST, GET, OPTIONS")
  ;;                       (ring/header "Access-Control-Allow-Headers", "content-type, x-requested-with")
  ;;                       (ring/header "Access-Control-Allow-Credentials", "true"))))

  (GET  "/new-game"          request                     (new-game-handler request))
  ;; (GET  "/guess:token"    [token]                     (guess-page-handler token))
  (GET  "/guess"             [guess :<< as-int :as request]  (guess-handler guess (get-session-cookie request)))
  (ANY  "*"                  []                          (not-found (str "Sorryasd, noz such URI on this server!"))))

(defn add-content-type-htmltext-header [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (ring/header "Content-Type" "application/json")))))


;; (defn redirect-to-login-middleware
;;   "If a login cookie (at present, can be anything) is not found, redirects user to the login page."
;;   [handler]
;;   (println "ASDSADASDSADAS")
;;   (fn [request]
;;     (let [token (get-session-cookie request)]
;;       ;(clojure.pprint/pprint request)
;;       (if (nil? token)
;;         (-> (handler (assoc request :uri "/login"))  ; Redirect to /login
;;             (ring/header "Content-Type" "text/html"))
;;         (handler request)))))


(def handler
  (-> site-routes
      ;; (wrap-cors :access-control-allow-origin ["http://localhost:9500"] ;; replace with your frontend domain/URL
      ;;            :access-control-allow-credentials true
      ;;            :access-control-allow-methods [:get :post :put :delete :options]
      ;;            :access-control-allow-headers ["Content-Type" "Authorization"]
      ;;            :access-control-max-age 3600)
      (middleware/wrap-defaults middleware/api-defaults)
      ;; (redirect-to-login-middleware)
      (add-content-type-htmltext-header)

      (multi/wrap-multipart-params)
      (wrap-json-response)
      (cookies/wrap-cookies)))


(comment
  (handler (mock/request :get "/new-game"))
  (handler (mock/request :get "/guess?guess=3"))
  (handler (mock/request :get "/dunno")))

;; #_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
;; (defonce server
;;   (future (run-jetty #'handler {:port 9500 :join? false})))

