(ns simple-server.core
  (:require clojure.pprint)
  (:use ring.adapter.jetty))


(defn handler [request]
  (clojure.pprint/pprint request)
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello, class!2"})


(def server
  (run-jetty #'handler {:port 3001 :join false}))
