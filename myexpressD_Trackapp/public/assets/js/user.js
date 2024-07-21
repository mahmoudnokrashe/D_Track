// يجب استخدام Node.js وMySQL لاسترجاع البيانات من قاعدة البيانات وإظهارها هنا
// في هذا المثال، سنستخدم بيانات ثابتة كنموذج

// عرض بيانات المستخدم
document.getElementById('user-name').textContent = 'أحمد محمد';
document.getElementById('user-email').textContent = 'ahmed@example.com';
document.getElementById('user-phone').textContent = '+123456789';

// عرض الطلبات (يمكن استبدال البيانات الثابتة بالبيانات المسترجعة من قاعدة البيانات)
const orderDiv = document.createElement('div');
orderDiv.classList.add('order');
orderDiv.innerHTML = `
    <p>طلب رقم: #12345</p>
    <p>حالة الشحنة: <span class="status">تم التسليم</span></p>
    <a href="order-details.html" class="btn">تفاصيل الشحنة</a>
`;
document.querySelector('.order-history').appendChild(orderDiv);

// عرض العروض الخاصة بالمستخدم (يمكن استبدالها ببيانات مسترجعة من قاعدة البيانات)
const offerDiv = document.createElement('div');
offerDiv.classList.add('offer-item');
offerDiv.innerHTML = `
    <p>عرض خاص: خصم 20% على شحنات الشهر الأول</p>
`;
document.getElementById('user-offers-list').appendChild(offerDiv);
