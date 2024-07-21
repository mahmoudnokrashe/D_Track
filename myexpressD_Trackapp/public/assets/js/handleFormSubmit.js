// معالجة إرسال النموذج
function handleFormSubmit(event) {
    event.preventDefault(); // منع إرسال النموذج الافتراضي

    // الحصول على نوع التسجيل
    const registrationType = document.querySelector('input[name="registration-type"]:checked').value;

    // توجيه المستخدم بناءً على نوع التسجيل
    if (registrationType === 'delivery-driver') {
        window.location.href = 'delivery-driver-details.html';
    } else if (registrationType === 'company') {
        window.location.href = 'company-details.html';
    }
}
