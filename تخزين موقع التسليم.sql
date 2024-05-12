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

تخزين موقع التسليم:
إضافة حقول إضافية في جدول الطلبات لتخزين موقع التسليم مثل العنوان وخطوط الطول والعرض.
يمكنك استخدام SQL لإنشاء جدول الطلبات مع الحقول الإضافية لتخزين موقع التسليم.
sql