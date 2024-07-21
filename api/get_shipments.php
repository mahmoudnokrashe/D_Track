function createShipment() {
    const formData = new FormData();
    formData.append('origin', document.getElementById('origin').value);
    formData.append('destination', document.getElementById('destination').value);
    formData.append('weight', document.getElementById('weight').value);
    formData.append('distance', document.getElementById('distance').value);
    formData.append('user_id', 1); // يجب تعديل هذا الجزء لتحديد المستخدم

    fetch('api/create_shipment.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
جعل الواجهة تتفاعل مع هذه API:

استخدم fetch في JavaScript لاستدعاء هذه الخدمات، كما في المثال التالي: