(ns simple-server.core
  (:require
   [clojure.pprint]
   [ring.adapter.jetty :refer [run-jetty]]

   [compojure.core :refer [GET POST ANY defroutes]]
   [ring.mock.request :as mock]))

;;; Routing
;;;
;; The process of associating handlers with urls (and
;; other request parameters) is called ROUTING.
;;
;; The most popular tool for doing this in clojure with Ring is COMPOJURE.
;; Let's re-implement our game using compojure.
;;


(defn no-such-uri-response []
  {:status  404
   :headers {"Content-Type" "text/plain"}
   :body    "Sorry, No such URI on this server!"})

(def game-in-progress (atom nil))

(defn extract-guess [qs]
  (when (seq qs)
    (Long. (second (clojure.string/split qs #"=")))))

(defn guess-response [request]
  (if-let [guess (extract-guess (:query-string request))]
    (cond
      (= guess @game-in-progress)
      (and (reset! game-in-progress (+ 1 (rand-int 10)))
           {:status 200
            :headers {"Content-Type" "text/plain"}
            :body "Congratulations! You win!"})

      (< guess @game-in-progress)
      {:status 200
       :headers {"Content-Type" "text/plain"}
       :body "Too low."}

      (> guess @game-in-progress)
      {:status 200
       :headers {"Content-Type" "text/plain"}
       :body "Too high."})
    {:status 400                        ; Bad request
     :headers {"Content-Type" "text/plain"}
     :body "You need to supply a guess with /guess?guess=N"}))

(defn new-game-response []
  ;; Make our new game:
  (reset! game-in-progress (+ 1 (rand-int 10)))
  {:status  200
   :headers {"Content-Type" "text/plain"}
   :body    "OK- start guessing at /guess"})

;;; Creating these requests is tiresome, so there is a utility library
;;; often used in testing, RING.MOCK.

(mock/request :get "/new-game")

;; Now we can write this more simply, like so:
((GET "/new-game" [] "foo") (mock/request :get "/new-game"))

;; Note that our function discrimitates on both the uri and the request-method:
((GET "/new-game" [] "foo") (mock/request :get "/unknown"))

((GET "/new-game" [] "foo") (mock/request :post "/new-game"))


(defroutes game-routes
  (GET "/new-game" [] (new-game-response))     ; Why does one have it wrapped in (),
  (GET "/guess"    [] guess-response)          ; and this one doesn't?
  (ANY "*"         [] (no-such-uri-response))) ; Our catch all, if nothing matches.

(def handler game-routes)


(defonce server
  (future (run-jetty #'handler {:port 3001 :join false})))
