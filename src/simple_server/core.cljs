(ns ^:figwheel-hooks simple-server.core
  (:require [clojure.string :as str]
            [ajax.core :refer [GET] [POST]]
            [goog.dom :as gdom]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as rdom]
            [reitit.core :as reitit])
  (:import goog.History))


(def guess-val      (r/atom 5))
(defn slider-on-change-handler [js-event]
  (reset! guess-val (-> js-event .-target .-value)))

(def guess-text "Guess the number I'm thinking of!")

(defonce app-state (atom {:text guess-text}))

(defn get-app-element []
  (gdom/getElement "app"))

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

(defn mount [el]
  (rdom/render [guess-page] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
