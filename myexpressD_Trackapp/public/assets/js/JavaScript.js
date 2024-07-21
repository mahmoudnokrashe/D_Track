// scripts.js

function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
}

// اغلاق النافذة المنبثقة عند النقر خارجها
window.onclick = function(event) {
    let loginModal = document.getElementById('login-modal');
    let signupModal = document.getElementById('signup-modal');
    if (event.target == loginModal) {
        closeModal('login-modal');
    }
    if (event.target == signupModal) {
        closeModal('signup-modal');
    }
}
// scripts.js

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// إغلاق النافذة المنبثقة عند النقر خارجها
window.onclick = function(event) {
    let loginModal = document.getElementById('login-modal');
    let signupModal = document.getElementById('signup-modal');
    if (event.target == loginModal) {
        closeModal('login-modal');
    }
    if (event.target == signupModal) {
        closeModal('signup-modal');
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); // منع إرسال النموذج الافتراضي

    // الحصول على نوع التسجيل
    const registrationType = document.querySelector('input[name="registration-type"]:checked').value;

    // نقل المستخدم بناءً على نوع التسجيل
    if (registrationType === 'delivery-driver') {
        window.location.href = 'delivery-driver-details.html';
    } else if (registrationType === 'company') {
        window.location.href = 'company-details.html';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج

        const registrationType = document.querySelector('input[name="registration-type"]:checked').value;
        const subscription = document.getElementById('subscription').value;

        // تحقق من نوع التسجيل وتوجيه المستخدم إلى الصفحة المناسبة
        if (registrationType === 'delivery-driver') {
            window.location.href = 'delivery-driver-details.html';
        } else if (registrationType === 'company') {
            window.location.href = 'company-details.html';
        } else {
            alert('يرجى اختيار نوع التسجيل.');
        }

        // يمكنك هنا أيضًا إرسال البيانات إلى الخادم إذا لزم الأمر
    });
});
