const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// إعداد التطبيق Express
const app = express();

// استخدام Body-Parser لتحليل الطلبات بصيغة JSON
app.use(bodyParser.json());

// إعداد الاتصال بقاعدة البيانات MySQL
const db = mysql.createConnection({
    host: 'localhost',  // المضيف لقاعدة البيانات
    user: 'root',       // اسم المستخدم
    password: 'password', // كلمة المرور
    database: 'vehicle_evaluation' // اسم قاعدة البيانات
});

// الاتصال بقاعدة البيانات
db.connect(err => {
    if (err) {
        console.error('خطأ في الاتصال بقاعدة البيانات:', err);
        return;
    }
    console.log('تم الاتصال بقاعدة البيانات MySQL بنجاح');
});

// API Endpoint لإضافة تقييم جديد
app.post('/api/evaluations', (req, res) => {
    const {
        vehicle_type,
        general_appearance,
        engine_performance,
        transmission,
        brake_system,
        fuel_type,
        fuel_consumption,
        gasoline_price,
        diesel_price,
        electricity_price,
        maintenance_schedule,
        maintenance_history,
        accessories,
        technical_specs,
        market_value
    } = req.body;

    const query = `
        INSERT INTO evaluations (
            vehicle_type, general_appearance, engine_performance, transmission, brake_system,
            fuel_type, fuel_consumption, gasoline_price, diesel_price, electricity_price,
            maintenance_schedule, maintenance_history, accessories, technical_specs, market_value
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [
        vehicle_type, general_appearance, engine_performance, transmission, brake_system,
        fuel_type, fuel_consumption, gasoline_price, diesel_price, electricity_price,
        maintenance_schedule, maintenance_history, accessories, technical_specs, market_value
    ], (err, result) => {
        if (err) {
            console.error('خطأ في الإدخال:', err);
            res.status(500).send('خطأ في الإدخال');
            return;
        }
        res.status(201).send('تمت إضافة التقييم بنجاح');
    });
});

// API Endpoint لاسترجاع كل التقييمات
app.get('/api/evaluations', (req, res) => {
    db.query('SELECT * FROM evaluations', (err, results) => {
        if (err) {
            console.error('خطأ في الاستعلام:', err);
            res.status(500).send('خطأ في الاستعلام');
            return;
        }
        res.json(results);
    });
});

// تحديد ميناء الخادم وبدء الاستماع على هذا الميناء
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`الخادم يعمل على الميناء ${PORT}`);
});
