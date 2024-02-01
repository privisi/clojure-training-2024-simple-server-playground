(ns simple-server.simple-game)

(def game-in-progress (atom nil))

(defn new-game! []
  ;; Make our new game:
  (reset! game-in-progress {:secret-num (+ 1 (rand-int 10)) :remaining-tries 6})
  :ok)

(defn reset-game []
  (reset! game-in-progress {:secret-num (+ 1 (rand-int 10)) :remaining-tries 6}))

(defn guess-answer [guess]
  (cond
    (nil? guess) nil

    (= guess (@game-in-progress :secret-num))
    (and reset-game :game-win)

    (= 0 (@game-in-progress :remaining-tries))
    (and reset-game :game-over)
    
    (< guess (@game-in-progress :secret-num))
    (and (swap! game-in-progress update :remaining-tries dec)
         :too-low)

    (> guess (@game-in-progress :secret-num))
    (and (swap! game-in-progress update :remaining-tries dec) 
         :too-high)))

