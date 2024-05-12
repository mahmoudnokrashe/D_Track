// البيانات المرجعية عن أنواع الوقود والمركبات واستهلاكها
const fuelData = {
    gasoline: {
        name: "بنزين",
        consumption: 8.5 // استهلاك الوقود (لتر/100 كم)
    },
    diesel: {
        name: "ديزل",
        consumption: 6.5 // استهلاك الوقود (لتر/100 كم)
    },
    electric: {
        name: "كهرباء",
        consumption: 15 // استهلاك الطاقة (كيلوواط/100 كم)
    }
};

const vehicleSpecifications = {
    car: {
        power: 150, // قوة المحرك (حصان)
        fuelType: "gasoline" // نوع الوقود
    },
    motorcycle: {
        power: 75, // قوة المحرك (حصان)
        fuelType: "gasoline" // نوع الوقود
    }
};

// استعلام عن نوع السيارة واستهلاك الوقود
function getFuelConsumption(vehicleType) {
    const fuelType = vehicleSpecifications[vehicleType].fuelType;
    const fuelInfo = fuelData[fuelType];
    return {
        name: fuelInfo.name,
        consumption: fuelInfo.consumption
    };
}

// استعلام عن مواصفات السيارة بناءً على نوعها
function getVehicleSpecs(vehicleType) {
    return vehicleSpecifications[vehicleType];
}

// الدالة التي تعالج تقديم النموذج
function handleFormSubmission(event) {
    event.preventDefault();
    
    // الحصول على بيانات النموذج
    const form = event.target;
    const vehicleType = form.elements['vehicle_type'].value;
    const generalAppearance = form.elements['general_appearance'].value;
    const enginePerformance = form.elements['engine_performance'].value;
    const transmission = form.elements['transmission'].value;
    const brakeSystem = form.elements['brake_system'].value;
    const maintenanceHistory = form.elements['maintenance_history'].value;
    const accessories = form.elements['accessories'].value;
    const technicalSpecs = form.elements['technical_specs'].value;
    const marketValue = form.elements['market_value'].value;

    // استعلام عن استهلاك الوقود وخصائص المركبة
    const fuelConsumption = getFuelConsumption(vehicleType);
    const vehicleSpecs = getVehicleSpecs(vehicleType);

    // عرض البيانات المرجعية للمستخدم
    console.log(`نوع المركبة: ${vehicleType}`);
    console.log(`استهلاك الوقود: ${fuelConsumption.name} - ${fuelConsumption.consumption} لتر/100 كم`);
    console.log(`قوة المحرك: ${vehicleSpecs.power} حصان`);

    // معالجة البيانات المرسلة بناءً على احتياجاتك
    // يمكنك إرسال البيانات إلى الخادم أو تخزينها محليًا حسب الحاجة
    console.log(`مظهر السيارة أو الدراجة البخارية: ${generalAppearance}`);
    console.log(`أداء المحرك: ${enginePerformance}`);
    console.log(`علبة التروس: ${transmission}`);
    console.log(`نظام الفرامل: ${brakeSystem}`);
    console.log(`سجل الصيانة: ${maintenanceHistory}`);
    console.log(`الملحقات: ${accessories}`);
    console.log(`المواصفات التقنية: ${technicalSpecs}`);
    console.log(`القيمة المالية: ${marketValue}`);
}

// ربط دالة التعامل مع النموذج بنموذج التقييم
document.getElementById("vehicle-evaluation-form").addEventListener("submit", handleFormSubmission);
