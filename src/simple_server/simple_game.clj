(ns simple-server.simple-game
  (:require [clojure.java.jdbc :as jdbc]))


(def db-conn {:dbtype "postgresql"
              :host "localhost"
              :dbname "postgres"
              :user "postgres"
              :password "postgres"
              :port 5432})



(defn insert-player [user-code secret-num]
  (jdbc/execute! db-conn ["INSERT INTO games_in_progress 
                               (user_id, secret_num, tries_left) 
                               VALUES (?, ?, 6)" (Long/parseLong user-code) secret-num]))

(defn failed-attempt [user-code]
  (jdbc/execute! db-conn ["UPDATE games_in_progress
                                SET tries_left = tries_left - 1
                                WHERE user_id = ?" (Long/parseLong user-code)]))

(defn reset-game [user-code]
  (jdbc/execute! db-conn ["DELETE FROM games_in_progress
                             WHERE user_id = ?" (Long/parseLong user-code)]))

(defn get-remaining-tries [user-code]
  (let [result (jdbc/query db-conn ["SELECT tries_left
                                    FROM games_in_progress
                                    WHERE user_id = ?" user-code])]
    (:tries_left result)))

(defn get-secret-num [user-code] 
  (jdbc/query db-conn ["SELECT secret_num
                                    FROM games_in_progress
                                    WHERE user_id = ?" user-code]))

   ;; Make our new game:  
(defn new-game! [user-code]
  (reset-game user-code)   ; Delete any existing game for the user before starting a new one
  (insert-player user-code ; Insert a new game with user’s hash, a random secret number, and initial tries count
                 (+ 1 (rand-int 10))))


(defn guess-answer [guess user-hash]
    ;; @games-in-progress
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

