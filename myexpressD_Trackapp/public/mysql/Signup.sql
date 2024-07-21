CREATE DATABASE dtrack;

USE dtrack;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255) NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    registration_type ENUM('delivery-driver', 'company') NOT NULL,
    subscription ENUM('10%', '20%', 'monthly', 'semi-annual', 'annual') NOT NULL,
    terms BOOLEAN NOT NULL
);
