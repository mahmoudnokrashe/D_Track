const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',  // قم بتعديل المضيف إذا كانت قاعدة البيانات في مكان آخر
    user: 'root',       // اسم المستخدم الخاص بقاعدة البيانات
    password: 'password', // كلمة المرور الخاصة بقاعدة البيانات
    database: 'vehicle_evaluation'
});

db.connect(err => {
    if (err) {
        console.error('خطأ في الاتصال بقاعدة البيانات:', err);
        return;
    }
    console.log('تم الاتصال بقاعدة البيانات MySQL بنجاح');
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
