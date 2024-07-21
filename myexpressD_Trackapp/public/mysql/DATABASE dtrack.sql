-- إنشاء قاعدة البيانات
CREATE DATABASE dtrack;
USE dtrack;

-- إنشاء جدول المستخدمين
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- إنشاء جدول الشحنات
CREATE TABLE shipments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    pickup_location VARCHAR(255) NOT NULL,
    delivery_location VARCHAR(255) NOT NULL,
    weight FLOAT NOT NULL,
    size FLOAT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- إنشاء جدول المواقع
CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- إنشاء جدول المعاملات
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shipment_id INT NOT NULL,
    amount FLOAT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (shipment_id) REFERENCES shipments(id) ON DELETE CASCADE
);

-- إضافة بيانات اختبارية

-- المستخدمين
INSERT INTO users (name, email, password) VALUES
('John Doe', 'john@example.com', 'password123'),
('Jane Smith', 'jane@example.com', 'password456');

-- الشحنات
INSERT INTO shipments (user_id, pickup_location, delivery_location, weight, size, status) VALUES
(1, '123 Main St, Cityville', '456 Oak St, Townsville', 10.5, 5.0, 'in transit'),
(2, '789 Pine St, Village', '321 Elm St, Metropolis', 20.0, 10.0, 'pending');

-- المواقع
INSERT INTO locations (address, type) VALUES
('123 Main St, Cityville', 'pickup'),
('456 Oak St, Townsville', 'delivery'),
('789 Pine St, Village', 'pickup'),
('321 Elm St, Metropolis', 'delivery');

-- المعاملات
INSERT INTO transactions (shipment_id, amount) VALUES
(1, 150.00),
(2, 250.00);
