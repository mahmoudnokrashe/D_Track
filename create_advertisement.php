<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إنشاء إعلان</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>إنشاء إعلان</h1>

    <!-- نموذج إنشاء الإعلان -->
    <form method="post" action="process_advertisement.php">
        <label for="title">عنوان الإعلان:</label>
        <input type="text" id="title" name="title" required><br><br>
        
        <label for="description">وصف الإعلان:</label>
        <textarea id="description" name="description" rows="4" cols="50" required></textarea><br><br>

        <input type="submit" value="إرسال الإعلان">
    </form>
</body>
</html>
