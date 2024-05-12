<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Order</title>
</head>
<body>
    <h1>Create New Order</h1>
    <form action="process_order.php" method="POST">
        <label for="customer_name">Customer Name:</label><br>
        <input type="text" id="customer_name" name="customer_name"><br>
        <label for="item">Item:</label><br>
        <input type="text" id="item" name="item"><br>
        <label for="quantity">Quantity:</label><br>
        <input type="number" id="quantity" name="quantity"><br>
        <button type="submit">Place Order</button>
    </form>
</body>
</html>
