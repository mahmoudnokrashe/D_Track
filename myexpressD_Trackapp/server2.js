const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

// تهيئة قاعدة البيانات
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dtrack_database'
});

// اتصال بقاعدة البيانات
connection.connect(err => {
    if (err) {
        console.error('خطأ في الاتصال بقاعدة البيانات: ' + err.stack);
        return;
    }
    console.log('تم الاتصال بقاعدة البيانات بنجاح.');
});

// استعلام قاعدة البيانات
app.get('/api/searchResults', (req, res) => {
    const sql = 'SELECT * FROM shipments_reports';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// إعداد الخادم للتشغيل على منفذ 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`الخادم يعمل على المنفذ: ${PORT}`);
});
