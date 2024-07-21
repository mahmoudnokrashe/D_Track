CREATE DATABASE dtrack;

USE dtrack;

CREATE TABLE delivery_drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_type ENUM('car', 'motorcycle') NOT NULL,
    driver_license VARCHAR(255) NOT NULL,
    vehicle_info VARCHAR(255) NOT NULL,
    vehicle_license VARCHAR(255) NOT NULL,
    experience INT NOT NULL
);
