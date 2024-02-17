(ns ^:figwheel-hooks simple-server.core
  (:require [clojure.string :as str]
            [ajax.core :refer [GET POST]]
            [goog.dom :as gdom]
            [goog.events :as events]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as rdom]
            [reitit.core :as reitit]))
(def backend-url "http://localhost:3000")

(def guess-val      (r/atom 5))

(def guess-text "Guess the number I'm thinking of!")
(defonce app-state (r/atom {:text guess-text}))

(defn slider-on-change-handler [js-event]
  (reset! guess-val (-> js-event .-target .-value)))

(defn multiply [a b] (* a b))

(defn form-sanitizer [input]
  (str/lower-case (str/trim input)))


(defn get-app-element []
  (gdom/getElement "app"))


;; Frontend event handler to update username and password
(defn update-credentials [field value]
  (swap! app-state assoc field value))


;; Frontend event handler to submit the login form
(defn submit-login []
  (let [{:keys [username password]} @app-state]
    (POST (str backend-url "/api/login")
          {:params {:username (form-sanitizer username) :password password}
           :handler (fn [response]
                      (swap! app-state merge
                             {:user-authenticated true
                              :message "Login successful, start guessing!"}))
           :error-handler (fn []
                            (swap! app-state assoc :message "Login failed! Try again."))})))

;; Frontend event handler to submit guesses to the backend
(defn submit-guess []
  (let [guess (@app-state :guess)]
    (POST (str backend-url "/api/guess")
          {:params {:guess guess}
           :handler (fn [response]
                      (swap! app-state assoc :message (str "Server says: " response)))
           :error-handler (fn []
                            (swap! app-state assoc :message "Error submitting guess."))})))

;; Login component
(defn login-form [] 
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




(defn guessing-game []
  [:div.guessing-game
   [:h3 "Guess the number I'm thinking of!"]
   [:input {:type "number"
            :value (@app-state :guess)
            :on-change #(swap! app-state assoc :guess (-> % .-target .-value))}]
   [:button {:on-click submit-guess} "Submit Guess"]
   [:div.message (@app-state :message)]])


(defn guess-page []
  [:div
   [:h1 "Guessing Game"]
   [:h3 (:text @app-state)]
   [:div {:class "slidecontainer"}
    [:input {:type  "range"
             :id    "MyRange1"
             :min   1
             :max   10
             :value 5
             :on-change slider-on-change-handler}]]
   [:h3 @guess-val]])

;; Conditional rendering based on authentication
(defn app-root []
  (if (@app-state :user-authenticated)
    [guessing-game]
    [login-form]))

(defn mount-app []
  (rdom/render [app-root] (.getElementById js/document "app")))

(defn ^:after-load on-reload []
  ;; Re-mount the app after code reloading occurs
  (mount-app))

;; Initial mounting of the app
(mount-app)
