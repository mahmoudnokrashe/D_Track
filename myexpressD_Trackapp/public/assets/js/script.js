function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content').innerHTML = '<p>حدث خطأ أثناء تحميل الصفحة.</p>';
        });
}

function calculateShippingCost() {
    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const costPerKm = 0.5; // تكلفة افتراضية لكل كيلومتر
    const costPerKg = 2; // تكلفة افتراضية لكل كيلوجرام

    if (!isNaN(weight) && !isNaN(distance)) {
        const totalCost = (distance * costPerKm) + (weight * costPerKg);
        document.getElementById('cost').innerText = `التكلفة المقدرة: ${totalCost.toFixed(2)}$`;
    } else {
        document.getElementById('cost').innerText = 'يرجى إدخال قيم صحيحة للوزن والمسافة.';
    }
}
