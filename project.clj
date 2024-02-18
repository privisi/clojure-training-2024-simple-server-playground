(defproject simple-server "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  
  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.11.4"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [reagent "1.1.1"]
                 [org.clojure/core.async "1.6.681"]

                      ;; JDBC
                 [org.postgresql/postgresql "42.7.1"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [org.xerial/sqlite-jdbc "3.30.1"]

                 [cljs-ajax "0.8.4"]
                 [cljs-http "0.1.46"]
                 [compojure "1.6.1"]
                 [ring/ring-mock "0.3.0"]
                 [ring/ring-devel "1.5.0"]
                 [ring-cors "0.1.13"]

                 [ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]
                 [metosin/reitit "0.5.18"]
                 
                 ;; For string encoding and decoding
                 [org.clj-commons/byte-transforms "0.2.1"]]
  
  :source-paths ["src"]

  :aliases {"fig:build" ["run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "simple-server.test-runner"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.17"]
                                  [org.slf4j/slf4j-nop "1.7.30"]]

                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target"]}})

