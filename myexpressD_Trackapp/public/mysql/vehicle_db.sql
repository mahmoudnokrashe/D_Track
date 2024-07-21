CREATE DATABASE vehicle_db;

USE vehicle_db;

CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50),
    generalAppearance TEXT,
    enginePerformance TEXT,
    transmission TEXT,
    brakeSystem TEXT,
    maintenanceHistory TEXT,
    accessories TEXT,
    technicalSpecs TEXT,
    marketValue DECIMAL(10, 2)
);
