UPDATE orders
SET delivery_latitude = :new_latitude, delivery_longitude = :new_longitude
WHERE order_id = :order_id;
تحديث موقع الطلبات أثناء التسليم:
في تطبيق الناقلين، استخدم تقنيات تحديد المواقع لتحديد موقع الناقل وموقع العميل.
عند التسليم، قم بتحديث موقع الطلب في قاعدة البيانات بالموقع الجديد.
يمكن استخدام استعلام SQL لتحديث موقع الطلب بناءً على رقم الطلب.
sql
