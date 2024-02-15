(defproject simple-server "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.11.4"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [reagent "1.1.1"]

                 ;; This is to run our basic HTTP server
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]

                  ;; JDBC
                 [org.postgresql/postgresql "42.7.1"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [org.xerial/sqlite-jdbc "3.30.1"]

                 ;; The libs we saw previously in training
                 [clj-time "0.15.2"]
                 [superstring "3.0.0"]
                 [funcool/cuerdas "RELEASE"]
                 [slingshot "0.12.2"]
                 [clj-http "3.10.1"]
                 [medley "1.3.0"]
                 [cheshire "5.9.0"]
                 [camel-snake-kebab "0.4.0"]

                 ;; Useful libraries for web development.
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]

                 [ring/ring-mock "0.3.0"]
                 [ring/ring-devel "1.5.0"]
                 
                 ;; For string encoding and decoding
                 [org.clj-commons/byte-transforms "0.2.1"]]


  :repl-options {:init-ns simple-server.core}
  :main simple-server.core/server)

  :source-paths ["src"]

  :aliases {"fig:build" ["run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "simple-server.test-runner"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.17"]
                                  [org.slf4j/slf4j-nop "1.7.30"]]
                   
                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target"]}})

