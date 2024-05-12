<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عرض القائمة</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>عرض القائمة</h1>

    <?php
    // استعلام SQL لاستعراض المنتجات أو الخدمات
    $sql = "SELECT * FROM products"; // قم بتغيير products إلى اسم الجدول الخاص بك
    
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // عرض البيانات في جدول HTML
        echo "<table>";
        echo "<tr><th>اسم المنتج</th><th>السعر</th></tr>";
        while($row = $result->fetch_assoc()) {
            echo "<tr><td>".$row["product_name"]."</td><td>".$row["price"]."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "لا توجد منتجات متاحة حاليًا.";
    }

    // إغلاق الاتصال
    $conn->close();
    ?>
</body>
</html>


تأكد من استبدال localhost و username و password و database بالقيم الصحيحة للخادم واسم المستخدم وكلمة المرور واسم قاعدة البيانات الخاصة بك. وكذلك قم بتغيير products إلى اسم الجدول الذي يحتوي على المنتجات أو الخدمات الخاصة بك.

هذا المثال يقوم بعرض جدول بالمنتجات والأسعار، ويمكنك تعديله وفقاً لاحتياجات موقعك أو تطبيقك.






