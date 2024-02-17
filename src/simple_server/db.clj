(ns simple-server.db
  (:require [clojure.java.jdbc :as jdbc]))

(def db-conn {:dbtype "postgresql"
              :host "localhost"
              :dbname "postgres"
              :user "postgres"
              :password "postgres"
              :port 5432})

(def default-users [1 "foo"      "bar"
                    2 "admin"    "123"
                    3 "user"     "pass"
                    4 "egg"      "man"
                    5 "test"     "test"])


(defn create-tables-if-not-existing []
  (jdbc/with-db-transaction [txn db-conn]
    (jdbc/execute! txn ["CREATE TABLE IF NOT EXISTS games_in_progress
                          (user_id bigint,
                                   secret_num integer,
                                   tries_left integer)"])
    (jdbc/execute! txn ["CREATE TABLE IF NOT EXISTS user_info
                            (user_id bigint,
                                     username varchar(64),
                                     password varchar(256))"])))

;;; generic user info to fill database

(defn make-default-users []
  (jdbc/execute! db-conn ["INSERT INTO user_info 
                               VALUES (1, 'foo', 'bar'),
                                      (2, 'admin', '123'), 
                                      (3, 'user', 'pass'), 
                                      (4, 'egg', 'man'), 
                                      (5, 'test', 'test')"]))

;;; finding credentials in database

(defn get-user-id [username]
  (jdbc/query db-conn ["SELECT user_id
                                    FROM user_info
                                    WHERE username = ?" username]))
(defn get-username [user-code]
  (jdbc/query db-conn ["SELECT username
                                    FROM user_info
                                    WHERE user_id = ?" user-code]))
(defn get-password [user-code]
  (jdbc/query db-conn ["SELECT password
                                    FROM user_info
                                    WHERE user_id = ?" user-code]))

;;; gamestate management

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
  (let [result (jdbc/query db-conn ["SELECT tries_left
                                    FROM games_in_progress
                                    WHERE user_id = ?" user-code])]
    (:tries_left result)))

(defn get-secret-num [user-code]
  (jdbc/query db-conn ["SELECT secret_num
                                    FROM games_in_progress
                                    WHERE user_id = ?" user-code]))

