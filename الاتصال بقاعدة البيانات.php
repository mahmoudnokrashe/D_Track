<?php
$servername = "localhost"; // اسم الخادم
$username = "username"; // اسم المستخدم
$password = "password"; // كلمة المرور
$dbname = "database"; // اسم قاعدة البيانات

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// فحص الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}
?>
