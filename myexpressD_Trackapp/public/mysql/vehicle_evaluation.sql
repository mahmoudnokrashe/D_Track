CREATE DATABASE vehicle_evaluation;

USE vehicle_evaluation;

CREATE TABLE vehicle_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE vehicle_models (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type_id INT,
    name VARCHAR(50) NOT NULL,
    FOREIGN KEY (type_id) REFERENCES vehicle_types(id)
);

CREATE TABLE fuel_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_type_id INT,
    vehicle_model_id INT,
    general_appearance TEXT,
    engine_performance TEXT,
    transmission TEXT,
    brake_system TEXT,
    fuel_type_id INT,
    fuel_consumption DECIMAL(10, 2),
    maintenance_schedule DATE,
    maintenance_history TEXT,
    accessories TEXT,
    technical_specs TEXT,
    market_value DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_type_id) REFERENCES vehicle_types(id),
    FOREIGN KEY (vehicle_model_id) REFERENCES vehicle_models(id),
    FOREIGN KEY (fuel_type_id) REFERENCES fuel_types(id)
);
