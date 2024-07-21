<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $origin = $_POST['origin'];
    $destination = $_POST['destination'];
    $weight = $_POST['weight'];
    $distance = $_POST['distance'];
    $user_id = $_POST['user_id']; // يجب تعديل هذا الجزء لتحديد المستخدم

    $sql = "INSERT INTO shipments (origin, destination, weight, distance, user_id) VALUES ('$origin', '$destination', '$weight', '$distance', '$user_id')";

    if ($conn->query($sql) === TRUE) {
        echo "تم إنشاء الشحنة بنجاح";
    } else {
        echo "خطأ: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
