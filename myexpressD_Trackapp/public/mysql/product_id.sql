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
