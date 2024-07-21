CREATE DATABASE dtrack_db;

USE dtrack_db;

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

CREATE TABLE merchants (
    merchant_id INT AUTO_INCREMENT PRIMARY KEY,
    merchant_name VARCHAR(255) NOT NULL,
    merchant_email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    product_name VARCHAR(255),
    quantity INT,
    delivery_address VARCHAR(255),
    delivery_latitude DECIMAL(10, 8),
    delivery_longitude DECIMAL(11, 8),
    delivery_status VARCHAR(50)
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    merchant_id INT,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    technical_specifications TEXT,
    shipping_info TEXT,
    warranty_info TEXT,
    customer_reviews TEXT,
    related_links TEXT,
    FOREIGN KEY (merchant_id) REFERENCES merchants(merchant_id)
);




CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'db_password';
GRANT ALL PRIVILEGES ON dtrack_db.* TO 'db_user'@'localhost';
FLUSH PRIVILEGES;
