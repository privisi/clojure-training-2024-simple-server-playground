(ns simple-server.core
  (:require [clojure.pprint]
            [clojure.string :as str]
            [compojure.coercions   :refer [as-int]]
            [compojure.core        :refer [ANY defroutes GET POST]]
            [ring.adapter.jetty    :refer [run-jetty]]
            [ring.middleware.defaults :as middleware]
            [ring.middleware.cookies  :as cookies]
            [ring.middleware.multipart-params :as multi]
            [ring.mock.request        :as mock]
            [ring.util.response       :as ring 
                                   :refer [not-found redirect response status]]
            [simple-server.simple-game :as game]
            [byte-transforms           :as transforms]))





(defn set-session-cookie [response username]
  (ring/set-cookie response "token" (transforms/hash username :crc32) {:max-age 3600})) ; Set cookie with a maximum age of 1 hour

(defn get-session-cookie [request]
  (println (get-in request [:cookies "token" :value]))
  (get-in request [:cookies "token" :value]))


(defn new-game-handler [request] 
    (when (game/new-game! (get-session-cookie request))
      (response (str "OK - start guessing at /guess/?guess=N"))))


(defn form-sanitizer [input]
  (str/lower-case (str/trim input)))


(defn valid-login? [token password] ;; placeholder login logic...
  (or (and (= token "foo") (= password "bar"))
      (and (= token "admin") (= password "123"))
      (and (= token "user") (= password "pass"))
      (and (= token "egg") (= password "man"))
      (and (= token "test") (= password "test"))))

;; tried to combine these functions but the login page is very fragile
(defn login-page-handler []
  (response (slurp "res/login.html"))) 
;; (defn guess-page-handler []
;;   (response (slurp "res/guess.html")))




(defn login-handler [request]
  (let [params (:form-params request)
        username (form-sanitizer (get params "username"))
        password (get params "password")]
    (println (str username password))
    (if (valid-login? username password)
      (-> (redirect "/new-game")
          (set-session-cookie username))
      ;; (redirect (str "/new-game/" token))
      (response "Invalid login. Try again."))))

(defn guess-handler [guess request] 
    (condp = (game/guess-answer guess request)
      nil       (-> (response  "You need to supply a guess with /guess?guess=N")
                    (status 400))
      :game-win  (response  (str "Congratulations! You win!"))
      :game-over (response  "Too bad! You ran out of tries!")
      :too-low   (response  (str "Too low! " (@game/games-in-progress :remaining-tries) " tries remaining!"))
      :too-high  (response  (str "Too high! " (@game/games-in-progress :remaining-tries) " tries remaining!"))))

(defroutes site-routes 
  (GET  "/login"             []                          (login-page-handler)) 
  (POST "/login"             request                     (login-handler request))

  (GET  "/new-game"          request                     (new-game-handler (str request)))
  ;; (GET  "/guess:token"    [token]                     (guess-page-handler token))
  (GET  "/guess"             [guess :<< as-int request]  (guess-handler guess (str request)))
  (ANY  "*"                  []                          (not-found (str "Sorry, no such URI on this server!\n\n
                                                                         Navigate to /new-game to start the guessing game.\n
                                                                         If you're in the middle of a game, go to /guess/?guess=N instead."))))

(defn add-content-type-htmltext-header [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (ring/header "Content-Type" "text/html")))))


(defn redirect-to-login-middleware
  "If a login cookie (at present, can be anything) is not found, redirects user to the login page."
  [handler]
  (fn [request]
    (let [token (get-session-cookie request)]
    (clojure.pprint/pprint request)
      (if (nil? token)
        (-> (handler (assoc request :uri "/login"))  ; Redirect to /login
            (ring/header "Content-Type" "text/html"))
        (handler request)))))


(def handler
  (-> site-routes 
      (redirect-to-login-middleware)
      (middleware/wrap-defaults middleware/api-defaults)
      (add-content-type-htmltext-header)
      (multi/wrap-multipart-params)
      (cookies/wrap-cookies)))

(comment
  (handler (mock/request :get "/new-game"))
  (handler (mock/request :get "/guess?guess=3"))
  (handler (mock/request :get "/dunno")))

(defonce server
  (future (run-jetty #'handler {:port 3000 :join? false})))