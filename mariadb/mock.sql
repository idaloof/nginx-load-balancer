--
-- SETUP
--
DROP DATABASE IF EXISTS `test`;
CREATE DATABASE `test`;
USE `test`;

--
-- DDL
--

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `hash` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
);

--
-- INSERT
--

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/user.csv'
INTO TABLE `user`
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
(@id,@username,@password,@hash) SET `id`=@id, `username`=@username, `hash`=@hash
;

SHOW WARNINGS;

--
-- VIEWS
--

DROP VIEW IF EXISTS v_user;

CREATE VIEW v_user AS
SELECT
    id,
    username,
    `hash`,
FROM `user`
;
