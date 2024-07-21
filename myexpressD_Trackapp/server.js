const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// إعداد قاعدة البيانات
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dtrack' // تغيير اسم قاعدة البيانات حسب الحاجة
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// إعداد body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// تعريف المسارات
app.use(express.static('public')); // لخدمة الملفات الثابتة في مجلد public

// معالجة طلبات إدخال بيانات الشركة
app.post('/submit-company', (req, res) => {
  const { company_name, company_registration, company_address } = req.body;

  const sql = 'INSERT INTO companies (company_name, company_registration, company_address) VALUES (?, ?, ?)';
  const values = [company_name, company_registration, company_address];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.send('Data inserted successfully');
    }
  });
});

// معالجة طلبات إدخال بيانات سائق التوصيل
app.post('/submit-driver', (req, res) => {
  const { vehicle_type, driver_license, vehicle_info, license, experience } = req.body;

  const sql = 'INSERT INTO delivery_drivers (vehicle_type, driver_license, vehicle_info, vehicle_license, experience) VALUES (?, ?, ?, ?, ?)';
  const values = [vehicle_type, driver_license, vehicle_info, license, experience];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.send('Data inserted successfully');
    }
  });
});

// معالجة طلبات إدخال بيانات التسجيل
app.post('/submit-registration', (req, res) => {
  const {
    full_name,
    contact_info,
    gender,
    birthdate,
    account_info,
    address,
    registration_type,
    subscription,
    terms
  } = req.body;

  const sql = 'INSERT INTO users (full_name, contact_info, gender, birthdate, email, address, registration_type, subscription, terms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [full_name, contact_info, gender, birthdate, account_info, address, registration_type, subscription, terms];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.send('Data inserted successfully');
    }
  });
});

// معالجة طلبات إدخال بيانات تقييم المركبات
app.post('/submit-evaluation', (req, res) => {
  const {
    vehicle_type,
    general_appearance,
    engine_performance,
    fuel_type,
    fuel_consumption,
    maintenance_schedule,
    gasoline_price,
    diesel_price,
    electricity_price,
    transmission,
    brake_system,
    maintenance_history,
    accessories,
    technical_specs,
    market_value
  } = req.body;

  const sql = 'INSERT INTO vehicle_evaluations (vehicle_type, general_appearance, engine_performance, fuel_type, fuel_consumption, maintenance_schedule, gasoline_price, diesel_price, electricity_price, transmission, brake_system, maintenance_history, accessories, technical_specs, market_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [vehicle_type, general_appearance, engine_performance, fuel_type, fuel_consumption, maintenance_schedule, gasoline_price, diesel_price, electricity_price, transmission, brake_system, maintenance_history, accessories, technical_specs, market_value];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.send('Data inserted successfully');
    }
  });
});

// استمرارية تشغيل الخادم
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
