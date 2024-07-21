document.addEventListener("DOMContentLoaded", () => {
    // رسم بياني لحالة الشحنات
    const ctx = document.getElementById('shipmentStatusChart').getContext('2d');
    const shipmentStatusChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['تم الاستلام', 'قيد الشحن', 'تم التسليم', 'ملغاة'],
            datasets: [{
                label: 'حالة الشحنات',
                data: [12, 19, 3, 5], // بيانات افتراضية، يجب تحديثها بالبيانات الفعلية
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // تعبئة تعليقات المستخدمين
    const feedbackData = [
        { date: '2024-07-01', user: 'محمد', comment: 'خدمة ممتازة!' },
        { date: '2024-07-02', user: 'علي', comment: 'التسليم تأخر قليلاً.' },
        { date: '2024-07-03', user: 'سارة', comment: 'التجربة كانت رائعة.' }
    ];

    const feedbackTableBody = document.querySelector('#feedbackTable tbody');
    feedbackData.forEach(feedback => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${feedback.date}</td><td>${feedback.user}</td><td>${feedback.comment}</td>`;
        feedbackTableBody.appendChild(row);
    });

    // تفعيل DataTables
    $('#feedbackTable').DataTable();
});
