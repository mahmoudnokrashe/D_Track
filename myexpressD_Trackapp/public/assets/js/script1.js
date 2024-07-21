document.addEventListener('DOMContentLoaded', () => {
    // إظهار الصفحة الرئيسية عند تحميل الصفحة
    showContent('home');
    
    // إضافة مستمع للأحداث لجميع الروابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            showContent(target);
        });
    });
});

// دالة لإظهار المحتوى بناءً على الهدف
function showContent(target) {
    // إخفاء جميع المحتويات
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    // إظهار المحتوى المطلوب
    document.getElementById(target).classList.add('active');
}
