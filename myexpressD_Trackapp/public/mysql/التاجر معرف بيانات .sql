CREATE TABLE merchants (
    merchant_id INT AUTO_INCREMENT PRIMARY KEY,
    merchant_name VARCHAR(255) NOT NULL,
    merchant_email VARCHAR(255) UNIQUE NOT NULL,
    -- Other merchant information
);
