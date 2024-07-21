-- إنشاء قاعدة البيانات
CREATE DATABASE vehicle_evaluation_db;

-- استخدام قاعدة البيانات
USE vehicle_evaluation_db;

-- إنشاء جدول vehicle_evaluations
CREATE TABLE vehicle_evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_type VARCHAR(50) NOT NULL,
    general_appearance TEXT,
    engine_performance TEXT,
    fuel_type VARCHAR(50),
    fuel_consumption VARCHAR(50),
    maintenance_schedule DATE,
    gasoline_price DECIMAL(10, 2),
    diesel_price DECIMAL(10, 2),
    electricity_price DECIMAL(10, 2),
    transmission TEXT,
    brake_system TEXT,
    maintenance_history TEXT,
    accessories TEXT,
    technical_specs TEXT,
    market_value TEXT
);

-- إدراج بعض البيانات التجريبية
INSERT INTO vehicle_evaluations (
    vehicle_type, general_appearance, engine_performance, fuel_type, fuel_consumption,
    maintenance_schedule, gasoline_price, diesel_price, electricity_price, transmission,
    brake_system, maintenance_history, accessories, technical_specs, market_value
) VALUES
('car', 'بعض الخدوش', 'أداء جيد', 'gasoline', '7 لتر/100 كم', '2023-07-01', 0.75, 0.60, 0.20, 'ناقل حركة اوتوماتيكي', 'نظام فرامل جيد', 'صيانة دورية', 'نظام ملاحة', '200 حصان', '20000 دولار'),
('motorcycle', 'خالية من العيوب', 'أداء ممتاز', 'electric', '2 كيلواط/100 كم', '2023-06-15', 0.75, 0.60, 0.20, 'ناقل حركة يدوي', 'نظام فرامل متطور', 'صيانة دورية', 'نظام صوتي', '100 حصان', '10000 دولار');
