(ns ^:figwheel-hooks simple-server.core
  (:require [clojure.string :as str]
            [ajax.core :refer [GET POST]]
            [goog.dom :as gdom]
            [goog.events :as events]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as rdom]
            [reitit.core :as reitit]
            [cljs.core.async :as a
             :refer [>! <! go chan buffer close! alts! timeout]]
            [cljs-http.client :as http]))
(def site-url "http://localhost:9500")

;; guesser page stuff
(def guess-val      (r/atom "5"))

(def welcome-text "Login to play the guessing game!")
(defonce app-state (r/atom {:message welcome-text}))


(defn slider-on-change-handler [js-event]
  (reset! guess-val (-> js-event .-target .-value)))

(defn multiply [a b] (* a b))

;; Frontend event handler to update username and password
(defn update-credentials [field value]
  (swap! app-state assoc field value))

(defn update-multi [hash-map]
  (swap! app-state merge hash-map))

;; Message text for the user to see.
(defn set-message [string]
  (swap! app-state assoc :message string))

;; Change the page that the user is currently viewing.
(defn goto-page [page-key]
  (swap! app-state assoc :nav-page page-key))

;; login page functions
(defn form-sanitizer [input]
  (str/lower-case (str/trim input)))


;; Channels, async, other considerations
(defn get-app-element []
  (gdom/getElement "app"))

(defonce event-channel (chan 10))

(defn dispatch-event! [e]
  (case (:type e)
    :login-success   (update-multi
                      {:user-authenticated true
                       :message "Login successful!"})
    :login-fail      (set-message "Login failed! Try again.")
    :guess-response  (set-message (str (:message (:message e))))
    :guess-error     (set-message "Error submitting guess. Please remain calm and retry.")
    :game-start-success (update-multi
                         {:nav-page :guess-page
                          :message "Guess the number I'm thinking of!"})
    :game-start-fail (update-multi
                      {:nav-page :login-page
                       :message "Error beginning game. Please try logging in again."})
    :game-win        (update-multi
                      {:nav-page :win-page
                       :message (str (:message (:message e)))})
    (println "Unknown event type: " e)))

(defonce global-handler
  (go
    (while true
      (let [e (<! event-channel)]
        (dispatch-event! e)))))




;; Frontend event handler to submit the login form
(defn submit-login []
  (let [{:keys [username password]} @app-state]
    ;; (println "keys are" username "and" password)
    (go
      (let [response (<! (http/post (str site-url "/api/login")
                                    {:form-params {:username (form-sanitizer username) :password password}}))] 
        (if (= "success" (get-in response [:body :status]))
          (>! event-channel {:type :login-success})
          (>! event-channel {:type :login-fail}))))))


(defn start-game 
  "Makes an asynchronous POST request to the server to start the game and create database tables if they do not already exist."[] 
  (go
    (let [response (<! (http/post (str site-url "/api/start")))]
      (if (= "success" (get-in response [:body :status]))
        (>! event-channel {:type :game-start-success})
        (>! event-channel {:type :game-start-fail})))))

;; Frontend event handler to submit guesses to the backend
(defn submit-guess []
  (let [guess (int @guess-val)]
    (go
      (let [response (<! (http/post (str site-url "/api/guess")
                                    {:form-params {:guess guess}}))]
        (println response)
        (if (= "success" (get-in response [:body :status]))
          (if (= "game-win" (get-in response [:body :game-state])) 
            (>! event-channel {:type :game-win       :message (:body response)})
            (>! event-channel {:type :guess-response :message (:body response)}))
          (>! event-channel {:type :guess-error}))))))




;; Page components
(defn login-page []
  [:div.login-form
   [:h1 "Login"]
   [:input {:type "text"
            :placeholder "Username"
            :on-change #(update-credentials :username (-> % .-target .-value))}]
   [:input {:type "password"
            :placeholder "Password"
            :on-change #(update-credentials :password (-> % .-target .-value))}]
   [:button {:on-click submit-login} "Login"]
   [:div.message (@app-state :message)]])

(defn rules-page []
  [:div
   [:h1 "Guessing Game"]
   [:p "Guess the number I'm thinking of between 1 to 10."]
   [:p "You have 5 chances to get it right."]
   [:p "I'll give you a hint, don't worry!"]
   [:button {:on-click (start-game)} "Start game"]
   [:p ""]
   [:div.message (@app-state :message)]])

(defn guess-page []
  [:div
   [:h1 "Guessing Game"]
   [:h3 (:message @app-state)]
   [:div {:class "slidecontainer"}
    [:input {:type  "range"
             :id    "MyRange1"
             :min   1
             :max   10
             :value @guess-val
             :on-change slider-on-change-handler}]]
   [:button {:on-click submit-guess} "Submit Guess!"][:h3 @guess-val]])

(defn win-page []
  [:div1
   [:h1 "WOW!"] 
   [:div.message (@app-state :message)]])

;; Conditional rendering based on authentication
(defn app-root []
  (if (@app-state :user-authenticated)
    (case (@app-state :nav-page) 
      :win-page            [win-page]
      :login-page          [login-page]
      :guess-page          [guess-page]
      (or :rules-page nil) [rules-page])
    [login-page])
)

(defn mount-app []
  (rdom/render [app-root] (.getElementById js/document "app")))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn ^:after-load on-reload []
  ;; Re-mount the app after code reloading occurs
  (mount-app))

;; Initial mounting of the app
(mount-app)
