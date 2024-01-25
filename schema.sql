CREATE DATABASE moneyTrans;
USE moneyTrans;

CREATE TABLE user (
    userID int NOT NULL,
    fullName varChar(255),
	userName varChar(255),
    email varChar(100)
);

CREATE TABLE wallet (
    ID int NOT NULL,
    balance DECIMAL(13,2),
	currency DECIMAL(13,2),
    PRIMARY KEY (ID)
);

CREATE TABLE invoice (
    ID int NOT NULL,
    amount DECIMAL(13,2),
	currency DECIMAL(13,2)
);