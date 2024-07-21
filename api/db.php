<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "d_track";

// إنشاء اتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// فحص الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}
?>
