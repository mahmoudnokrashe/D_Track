CREATE DATABASE dtrack;

USE dtrack;

CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    company_registration VARCHAR(255) NOT NULL,
    company_address VARCHAR(255) NOT NULL
);
