(ns simple-server.core
  (:require [clojure.pprint]
            ;[clojure.string :as str]
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
            [byte-transforms       :refer [encode decode decompress compress]]))

;;; Finally, let us truly separate concerns between our "application code"
;;; and our "http code".  Our game now lives in its own namespace, and
;;; is fully testable independent of our "presentation layer".

(defn new-game-handler [username]
  (when (game/new-game!)
    (response (str "OK - start guessing at /guess/" username "?guess=N"))))


;; (defn form-sanitizer [input]
;;   (str/lower-case (str/trim input)))


(defn valid-login? [username password] ;; placeholder login logic...
  (or (and (= username "foo") (= password "bar"))
      (and (= username "admin") (= password "123"))
      (and (= username "egg") (= password "man"))
      (and (= username "test") (= password "test"))))

;; tried to combine these functions but the login page is very fragile
(defn login-page-handler []
  (response (slurp "res/login.html"))) 
;; (defn guess-page-handler []
;;   (response (slurp "res/guess.html")))

(defn set-login-cookie [response username]
  (ring/set-cookie response "username" username {:max-age 3600})) ; Set cookie with a maximum age of 1 hour

(defn get-username-from-cookie [request]
  (get-in request [:cookies "username" :value]))

(defn user-hash [username]
  )

(defn login-handler [request]
  (let [params (:form-params request)
        username (get params "username")
        password (get params "password")]
    (println (str username password))
    (if (valid-login? username password)
      (-> (redirect "/new-game")
          (set-login-cookie username)))))
      ;; (redirect (str "/new-game/" username))
      ;; (response "Invalid login. Try again."))))

(defn guess-handler [username guess]
  (if (= username nil)
    (redirect "/login")
    (condp = (game/guess-answer guess)
      nil       (-> (response  "You need to supply a guess with /guess?guess=N")
                    (status 400))
      :game-win  (response  (str "Congratulations " username "! You win!"))
      :game-over (response  "Too bad! You ran out of tries!")
      :too-low   (response  (str "Too low! " (@game/game-in-progress :remaining-tries) " tries remaining!"))
      :too-high  (response  (str "Too high! " (@game/game-in-progress :remaining-tries) " tries remaining!")))))

(defroutes site-routes 
  (GET  "/login"             []                          (login-page-handler)) 
  (POST "/login"             request                     (login-handler request))

  (GET  "/new-game:username" []                  (new-game-handler ))
  ;; (GET  "/guess:username"    [username]                  (guess-page-handler username))
  (GET  "/guess:username"    [guess :<< as-int] (guess-handler guess))
  (ANY  "*"                  []                          (not-found "Sorry, No such URI on this server!")))

(defn add-content-type-htmltext-header [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (ring/header "Content-Type" "text/html")))))

;; doesn't work right now
(defn redirect-to-login-middleware [handler]
  (fn [request]
    (let [username (get-username-from-cookie request)]
    (clojure.pprint/pprint request)
      (if (nil? username)
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