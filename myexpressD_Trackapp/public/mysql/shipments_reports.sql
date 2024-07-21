CREATE TABLE shipments_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    month VARCHAR(255),
    shipments INT,
    cost VARCHAR(255),
    delivery_time VARCHAR(255)
);

CREATE TABLE user_comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment TEXT
);
