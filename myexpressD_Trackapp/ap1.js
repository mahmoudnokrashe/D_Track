const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const db = new sqlite3.Database(':memory:');

// إنشاء الجداول
db.serialize(() => {
    db.run("CREATE TABLE vehicles (id INTEGER PRIMARY KEY, type TEXT, generalAppearance TEXT, enginePerformance TEXT, transmission TEXT, brakeSystem TEXT, maintenanceHistory TEXT, accessories TEXT, technicalSpecs TEXT, marketValue REAL)");
    db.run("CREATE TABLE merchants (merchant_id INTEGER PRIMARY KEY, merchant_name TEXT NOT NULL, merchant_email TEXT UNIQUE NOT NULL)");
    db.run("CREATE TABLE orders (order_id INTEGER PRIMARY KEY, customer_id INTEGER, product_name TEXT, quantity INTEGER, delivery_address TEXT, delivery_latitude REAL, delivery_longitude REAL, delivery_status TEXT)");
    db.run("CREATE TABLE products (product_id INTEGER PRIMARY KEY, merchant_id INTEGER, product_name TEXT NOT NULL, description TEXT, price REAL NOT NULL, image_url TEXT, technical_specifications TEXT, shipping_info TEXT, warranty_info TEXT, customer_reviews TEXT, related_links TEXT, FOREIGN KEY (merchant_id) REFERENCES merchants(merchant_id))");
});

// استعراض الصفحات
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// إضافة مسارات إضافية
app.get('/vehicles', (req, res) => {
    db.all("SELECT * FROM vehicles", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Database query failed");
        } else {
            res.render('vehicles', { title: 'Vehicles', vehicles: rows });
        }
    });
});

app.get('/products', (req, res) => {
    db.all("SELECT * FROM products", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Database query failed");
        } else {
            res.render('products', { title: 'Products', products: rows });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
