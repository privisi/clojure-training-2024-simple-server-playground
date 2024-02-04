(ns simple-server.simple-game)

(defonce games-in-progress (atom nil))


(defn new-game! [user-hash]
  ;; Make our new game:  
  (swap! games-in-progress assoc user-hash {:secret-num (+ 1 (rand-int 10)) :remaining-tries 6})
  @games-in-progress
  :ok)



(defn reset-game [user-hashcode]
  (swap! games-in-progress dissoc user-hashcode))
(defn failed-attempt [user-code]
  (swap! games-in-progress update-in user-code :remaining-tries dec))
(defn get-remaining-tries [user-code]
  (get-in @games-in-progress [user-code :remaining-tries]))
(defn get-secret-num [user-code]
  (get-in @games-in-progress [user-code :secret-num]))




(defn guess-answer [guess user-hash]
@games-in-progress
  (def foo [ guess user-hash])
  (let [user user-hash] 
    (cond
      (nil? guess) nil

      (= guess (get-secret-num user))
      (and (reset-game user) :game-win)

      (= 0 (get-remaining-tries user))
      (and (reset-game user) :game-over)

      (< guess (get-secret-num user))
      (and (failed-attempt user)
           :too-low)

      (> guess (get-secret-num user))
      (and (failed-attempt user)
           :too-high))))



(def fetched '{:ssl-client-cert nil,
              :protocol "HTTP/1.1",
              :cookies
              {"pga4_session"
               {:value
                "a48a9437-733d-4e8a-9d64-d24e6cf80f45!P8YklLmoz8CyZ t1iPdoCttCjHJ0cIOYrsaDgw9sqzQ="},
               "PGADMIN_LANGUAGE" {:value "en"},
               "token" {:value "2356372769"}},
              :remote-addr "127.0.0.1",
              :params {:guess "10"},
              :headers
              {"sec-fetch-site" "none",
               "host" "localhost:3000",
               "user-agent"
               "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
               "cookie"
               "pga4_session=a48a9437-733d-4e8a-9d64-d24e6cf80f45!P8YklLmoz8CyZ+t1iPdoCttCjHJ0cIOYrsaDgw9sqzQ=; PGADMIN_LANGUAGE=en; token=2356372769",
               "sec-fetch-user" "?1",
               "connection" "keep-alive",
               "upgrade-insecure-requests" "1",
               "accept"
               "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
               "accept-language" "en-US,en;q=0.5",
               "sec-fetch-dest" "document",
               "accept-encoding" "gzip, deflate, br",
               "sec-fetch-mode" "navigate",
               "dnt" "1",
               "sec-gpc" "1"},
              :server-port 3000,
              :content-length nil,
              :form-params {},
              :query-params {"guess" "10"},
              :content-type nil,
              :character-encoding nil,
              :uri "/guess",
              :server-name "localhost",
              :query-string "guess=10",
              
              :multipart-params {},
              :scheme :http,
              :request-method :get})