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
  (first (jdbc/query db-conn ["SELECT tries_left
                                    FROM games_in_progress
                                    WHERE user_id = ?" (Long/parseLong user-code)]
                     {:result-set-fn :one})))

(defn get-secret-num [user-code]
  (first (jdbc/query db-conn ["SELECT secret_num
                                    FROM games_in_progress
                                    WHERE user_id = ?" (Long/parseLong user-code)]
                     {:result-set-fn :one})))

   ;; Make our new game:  
(defn new-game! [user-code]
  (reset-game user-code)   ; Delete any existing game for the user before starting a new one
  (insert-player user-code ; Insert a new game with user’s hash, a random secret number, and initial tries count
                 (+ 1 (rand-int 10))))




  ;;
  ;;;; Atom version, disused since we're working with a database now ;;;;
  ;;
  ;; (defonce games-in-progress (atom nil))
  ;;
  ;; (defn new-game! [user-code]
  ;;   ;; Make our new game:  
  ;;   (swap! games-in-progress assoc user-code {:secret-num (+ 1 (rand-int 10)) :remaining-tries 6})
  ;;   @games-in-progress
  ;;   :ok)
  ;;
  ;; (defn reset-game [user-code]
  ;;   (swap! games-in-progress dissoc user-code))
  ;; (defn failed-attempt [user-code]
  ;;   (swap! games-in-progress update-in user-code :remaining-tries dec))
  ;; (defn get-remaining-tries [user-code]
  ;;   (get-in @games-in-progress [user-code :remaining-tries]))
  ;; (defn get-secret-num [user-code]
  ;;   (get-in @games-in-progress [user-code :secret-num]))
  ;;



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

