(ns simple-server.core
  (:require [clojure.pprint]
            [clojure.string :as str]
            [compojure.coercions :refer [as-int]]
            [compojure.core :refer [ANY defroutes GET POST]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :as middleware]
            [ring.mock.request :as mock]
            [ring.util.response :as ring :refer [not-found redirect response
                                                 status]]
            [simple-server.simple-game :as game]))

;;; Finally, let us truly separate concerns between our "application code"
;;; and our "http code".  Our game now lives in its own namespace, and
;;; is fully testable independent of our "presentation layer".

(defn new-game-handler []
  (when (game/new-game!)
    (response "OK - start guessing at /guess")))


(defn form-parser [input]
  (str/lower-case (str/trim input)))


(defn valid-login? [username password] ;; placeholder login logic...
  (and (= username "foo") (= password "bar")))

(defn login-page-handler []
  (response (slurp "res/login.html")))


(defn login-handler [request]
  (let [params (:form-params request)
        username (get params "username")
        password (get params "password")]
    (if (valid-login? username password)
      (redirect "/new-game")
      (response "Invalid login. Try again."))))

(defn guess-handler [guess]
  (condp = (game/guess-answer guess)
    nil       (-> (response  "You need to supply a guess with /guess?guess=N")
                  (status 400))
    :game-win  (response  "Congratulations! You win!")
    :game-over (response  "Too bad! You ran out of tries!")
    :too-low   (response  (str "Too low! " (@game/game-in-progress :remaining-tries) " tries remaining!"))
    :too-high  (response  (str "Too high! " (@game/game-in-progress :remaining-tries) " tries remaining!"))))

(defroutes site-routes 
  (GET  "/login" [] (login-page-handler)) 
  (POST "/login" request (login-handler request))

  (GET  "/new-game" []                 (new-game-handler))
  (GET  "/guess"    [guess :<< as-int] (guess-handler guess))
  (ANY  "*"         []                 (not-found "Sorry, No such URI on this server!")))

(defn add-content-type-htmltext-header [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (ring/header "Content-Type" "text/html")))))

(def handler
  (-> site-routes
      (middleware/wrap-defaults middleware/api-defaults)
      (add-content-type-htmltext-header)))

(comment
  (handler (mock/request :get "/new-game"))
  (handler (mock/request :get "/guess?guess=3"))
  (handler (mock/request :get "/dunno")))

(defonce server
  (future (run-jetty #'handler {:port 3000 :join? false})))