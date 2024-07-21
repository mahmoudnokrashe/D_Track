// استخدام AJAX أو fetch لإرسال البيانات إلى الخادم وتحديث قاعدة البيانات

// دالة للتعامل مع تعديل الحقول
function editField(fieldName) {
    const field = document.getElementById(fieldName);
    field.removeAttribute('readonly');
    field.focus();
}

// التعامل مع إرسال البيانات من نموذج تعديل الحساب الشخصي
document.getElementById('personal-info-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    // استخدام fetch أو AJAX لإرسال البيانات إلى الخادم وتحديث قاعدة البيانات
    // مثال بسيط:
    fetch('/update-profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('تم تحديث البيانات:', data);
        // يمكنك إضافة رمز أو رسالة تأكيد هنا
    })
    .catch(error => {
        console.error('حدث خطأ أثناء إرسال البيانات:', error);
    });
});

// يمكنك تكرار العملية لنماذج التعديل الأخرى (الأمان، تفضيلات الحساب، إلخ)
