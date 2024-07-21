const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// إعداد محرك القوالب
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// إعداد الملفات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// إعداد قاعدة البيانات
const db = mysql.createConnection({
    host: 'localhost',
    user: 'db_user',
    password: 'db_password',
    database: 'dtrack'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// إعداد bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// إعداد المسارات
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/login-signup', (req, res) => {
    res.render('login-signup', { title: 'Login Signup' });
});

app.get('/account', (req, res) => {
    res.render('account', { title: 'Account' });
});

app.get('/account-settings', (req, res) => {
    res.render('account-settings', { title: 'Account Settings' });
});

app.get('/company-details', (req, res) => {
    res.render('company-details', { title: 'Company Details' });
});

app.get('/delivery-driver-details', (req, res) => {
    res.render('delivery-driver-details', { title: 'Delivery Driver Details' });
});

app.get('/vehicle-evaluation', (req, res) => {
    res.render('vehicle-evaluation', { title: 'Vehicle Evaluation' });
});

app.get('/vehicle-information', (req, res) => {
    res.render('vehicle-information', { title: 'Vehicle Information' });
});

app.get('/create-shipment', (req, res) => {
    res.render('create-shipment', { title: 'Create Shipment' });
});

app.get('/dispatch-notifications', (req, res) => {
    res.render('dispatch-notifications', { title: 'Dispatch Notifications' });
});

app.get('/search-results', (req, res) => {
    res.render('search-results', { title: 'Search Results' });
});

app.get('/reports', (req, res) => {
    res.render('reports', { title: 'Reports' });
});

app.get('/tracking', (req, res) => {
    res.render('tracking', { title: 'Tracking' });
});

app.get('/terms-and-policies', (req, res) => {
    res.render('terms-and-policies', { title: 'Terms and Policies' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // قم بمعالجة بيانات تسجيل الدخول هنا
    res.send(`Logged in as ${username}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
