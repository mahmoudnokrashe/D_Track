INSERT INTO products (product_name, description, price, image_url, technical_specifications, shipping_info, warranty_info, customer_reviews, related_links) 
VALUES 
('Product 1', 'Description for product 1', 50.99, 'https://example.com/product1.jpg', 'Specifications for product 1', 'Shipping info for product 1', 'Warranty info for product 1', 'Customer reviews for product 1', 'Related links for product 1'),
('Product 2', 'Description for product 2', 99.99, 'https://example.com/product2.jpg', 'Specifications for product 2', 'Shipping info for product 2', 'Warranty info for product 2', 'Customer reviews for product 2', 'Related links for product 2');

CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'db_password';
GRANT ALL PRIVILEGES ON dtrack_db.* TO 'db_user'@'localhost';
FLUSH PRIVILEGES;
