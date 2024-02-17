(ns simple-server.simple-game
  (:require [simple-server.db :as db]))

   ;; Make our new game:  
(defn new-game! [user-code]
  (db/reset-game user-code)   ; Delete any existing game for the user before starting a new one
  (db/insert-player user-code ; Insert a new game with user’s hash, a random secret number, and initial tries count
                 (+ 1 (rand-int 10))))


(defn guess-answer [guess user-hash]
    ;; @games-in-progress
  (let [user user-hash]
    (cond
      (nil? guess) nil

      (= guess (db/get-secret-num user))
      (and (db/reset-game user) :game-win)

      (= 0 (db/get-remaining-tries user))
      (and (db/reset-game user) :game-over)

      (< guess (db/get-secret-num user))
      (and (db/failed-attempt user)
           :too-low)

      (> guess (db/get-secret-num user))
      (and (db/failed-attempt user)
           :too-high))))

