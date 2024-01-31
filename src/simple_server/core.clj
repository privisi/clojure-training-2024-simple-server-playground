(ns simple-server.core
  (:require clojure.pprint)
  (:use ring.adapter.jetty))


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


(defn handler [request]
  #_(clojure.pprint/pprint request)
  (condp = (:uri request)
    "/new-game" (new-game-response)
    "/guess"    (guess-response request)
    (no-such-uri-response)))


(defonce server
  (future (run-jetty #'handler {:port 3001 :join false})))
