-- إنشاء قاعدة البيانات
CREATE DATABASE traders_info;

-- استخدام قاعدة البيانات
USE traders_info;

-- إنشاء جدول فئات التجار
CREATE TABLE trader_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

-- إضافة فئات التجار بناءً على المعايير المختلفة
INSERT INTO trader_categories (category_name) VALUES
-- نوع النشاط التجاري
('تجار التجزئة'),
('تجار الجملة'),
('مقدمو الخدمات'),
('المصنعون'),
-- حجم النشاط التجاري
('الشركات الصغيرة'),
('الشركات المتوسطة'),
('الشركات الكبيرة'),
-- المنطقة الجغرافية
('المحلية'),
('الإقليمية'),
('الوطنية'),
('الدولية'),
-- القطاع الصناعي
('الأغذية والمشروبات'),
('الملابس والأزياء'),
('الإلكترونيات'),
('العقارات'),
('الصحة والجمال'),
-- العملاء المستهدفون
('الأفراد'),
('الشركات'),
('الجهات الحكومية');

-- إنشاء جدول التجار
CREATE TABLE traders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    company_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES trader_categories(id)
);

-- إنشاء جدول عناوين التجار
CREATE TABLE trader_addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trader_id INT NOT NULL,
    address TEXT NOT NULL,
    address_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trader_id) REFERENCES traders(id)
);

-- إنشاء جدول ملاحظات التجار
CREATE TABLE trader_notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trader_id INT NOT NULL,
    note TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trader_id) REFERENCES traders(id)
);
