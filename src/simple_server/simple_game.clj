(ns simple-server.simple-game 
  (:require simple-server.core))

(def games-in-progress (atom nil))
(defn user-hash [request]
  (simple-server.core/get-session-cookie request))

(defn new-game! [request]
  ;; Make our new game: 
  (println (user-hash request))
  (swap! games-in-progress assoc (user-hash request) {:secret-num (+ 1 (rand-int 10)) :remaining-tries 6})
  @games-in-progress
  :ok)


(defn reset-game [user-hashcode]
  ((swap! games-in-progress dissoc user-hashcode)))
(defn failed-attempt [user-code]
  (swap! games-in-progress update-in user-code :remaining-tries dec))
(defn get-remaining-tries [user-code]
  (@games-in-progress user-code :remaining-tries))
(defn get-secret-num [user-code]
  (@games-in-progress user-code :secret-num))


(defn guess-answer [guess request]
@games-in-progress
  (let [user (user-hash request)]
    (println user user)
    (println ":secret-num " (@games-in-progress user :secret-num))
    (println ":remaining-tries " (@games-in-progress user :remaining-tries))
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

