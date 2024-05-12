// بيانات عن أنواع السيارات والدراجات البخارية المختلفة
const vehicleData = {
    car: {
        fuelType: "gasoline",
        power: "150 hp",
        model: "Sedan",
        fuelConsumption: 8 // لتر لكل 100 كم
    },
    motorcycle: {
        fuelType: "gasoline",
        power: "70 hp",
        model: "Sport",
        fuelConsumption: 4 // لتر لكل 100 كم
    },
    // يمكنك إضافة المزيد من أنواع السيارات والدراجات البخارية هنا
};

// وظيفة للتحقق من نوع المركبة وإرجاع المعلومات المتعلقة بها
function checkVehicleType(vehicleType) {
    return vehicleData[vehicleType] || null;
}
