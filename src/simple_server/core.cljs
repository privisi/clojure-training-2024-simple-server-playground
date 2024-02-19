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

(def guess-text "Guess the number I'm thinking of!")
(defonce app-state (r/atom {:text guess-text}))


(defn slider-on-change-handler [js-event]
  (reset! guess-val (-> js-event .-target .-value)))

(defn multiply [a b] (* a b))


;; login page functions
(defn form-sanitizer [input]
  (str/lower-case (str/trim input)))


;; Channels, async, other considerations
(defn get-app-element []
  (gdom/getElement "app"))

(defonce event-channel (chan 10))

(defn dispatch-event! [e]
  (case (:type e)
    :login-success  (swap! app-state merge
                           {:user-authenticated true
                            :message "Login successful, start guessing!"})
    :login-fail     (swap! app-state assoc :message "Login failed! Try again.")
    :guess-response (swap! app-state assoc :message (str "Server says: " (:message e)))
    :guess-error    (swap! app-state assoc :message "Error submitting guess.")
    (println "Unknown event type: " e)))

(defonce global-handler
  (go
    (while true
      (let [e (<! event-channel)]
        (dispatch-event! e)))))


;; Frontend event handler to update username and password
(defn update-credentials [field value]
  (swap! app-state assoc field value))


;; Frontend event handler to submit the login form
(defn submit-login []
  (let [{:keys [username password]} @app-state]
    ;; (println "keys are" username "and" password)
    (go
      (let [response (<! (http/post (str site-url "/api/login")
                                    {:form-params {:username (form-sanitizer username) :password password}}))]
        ;; (def r response)
        ;; (println response)
        
        (if (= "success" (get-in response [:body :status]))
          (>! event-channel {:type :login-success})
          (>! event-channel {:type :login-fail}))))))

;; Frontend event handler to submit guesses to the backend
(defn submit-guess []
  (let [guess (int @guess-val)]
    (go
      (let [response (<! (http/post (str site-url "/api/guess")
                                    {:form-params {:guess guess}}))]
        (println response)
        (if (= "success" (get-in response [:body :status]))
          (>! event-channel {:type :guess-response :message (:body response)})
          (>! event-channel {:type :guess-error}))
        ))))


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

(defn guess-page []
  [:div
   [:h1 "Guessing Game"]
   [:h3 (:message @app-state)]
   [:div {:class "slidecontainer"}
    [:input {:type  "range"
             :id    "MyRange1"
             :min   1
             :max   10
             :value 5
             :on-change slider-on-change-handler}]]
   [:button {:on-click submit-guess} "Submit Guess!"][:h3 @guess-val]])


;; Conditional rendering based on authentication
(defn app-root []
  (if (@app-state :user-authenticated)
    [guess-page]
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
