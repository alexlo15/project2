DROP DATABASE IF exists KNOTCODE;
CREATE DATABASE KNOTCODE;
USE KNOTCODE;
​
CREATE TABLE Topics (
topicId INTEGER NOT NULL auto_increment,
topic VARCHAR(50),
PRIMARY KEY(topicId) 
);
​
CREATE TABLE Questions(
	id INTEGER NOT NULL auto_increment,
    topicId integer,
    question VARCHAR(200),
    choice1 VARCHAR(200),
    choice2 VARCHAR(200),
    choice3 VARCHAR(200),
    PRIMARY KEY(id),
    FOREIGN KEY (topicId)
    REFERENCES KNOTCODE.Topics(topicId)
); 
INSERT INTO Topics(topic) VALUES ('HTML'), ('CSS'), ('JavaScript');
​