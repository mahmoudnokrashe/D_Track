// حساب تكاليف الصيانة بناءً على سجل الصيانة
function calculateMaintenanceCosts(vehicleType, maintenanceData) {
    const vehicleInfo = checkVehicleType(vehicleType);
    if (vehicleInfo && maintenanceData) {
        // احسب تكاليف الصيانة بناءً على البيانات المعطاة
        // (هذه عملية حسابية تعتمد على البيانات المتوفرة)
        return maintenanceData.reduce((totalCost, record) => totalCost + record.cost, 0);
    }
    return null;
}
