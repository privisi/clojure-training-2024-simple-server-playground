(ns simple-server.simple-game
  (:require [simple-server.db :as db]))

   ;; Make our new game:  
(defn new-game! [user-code]
  (db/reset-game user-code)   ; Delete any existing game for the user before starting a new one
  (db/insert-player-instance user-code (+ 1 (rand-int 10))))
  ; Initialize a new game by inserting user’s ID, a random secret number, and initial tries count into the database
                             


(defn guess-answer [guess user-num]
  (let [user            (int user-num)
        secret-num      (:secret_num (first (db/get-secret-num user)))
        remaining-tries (:tries_left (first (db/get-remaining-tries user)))]
    (cond
      (nil? guess) nil

      (= guess secret-num)
      (and (db/reset-game user) :game-win)

      (= 0 remaining-tries)
      (and (db/reset-game user) :game-over)

      (< guess secret-num)
      (and (db/failed-attempt user)
           :too-low)

      (> guess secret-num)
      (and (db/failed-attempt user)
           :too-high)
      :else
      (println "ERROR: FAILED. USER:" user-num "GUESS:" guess))))

