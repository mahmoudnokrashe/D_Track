document.addEventListener('DOMContentLoaded', function() {
    loadVehicleTypes();
    loadFuelTypes();
});

function loadVehicleTypes() {
    fetch('/api/vehicle-types')
        .then(response => response.json())
        .then(data => {
            const vehicleTypeSelect = document.getElementById('vehicle-type');
            vehicleTypeSelect.innerHTML = '<option value="">اختر نوع المركبة</option>';
            data.forEach(type => {
                const option = document.createElement('option');
                option.value = type.id;
                option.textContent = type.name;
                vehicleTypeSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading vehicle types:', error));
}

function updateModels() {
    const vehicleTypeId = document.getElementById('vehicle-type').value;
    if (!vehicleTypeId) {
        const vehicleModelSelect = document.getElementById('vehicle-model');
        vehicleModelSelect.innerHTML = '<option value="">اختر موديل المركبة</option>';
        return;
    }

    fetch(`/api/vehicle-models?type_id=${vehicleTypeId}`)
        .then(response => response.json())
        .then(data => {
            const vehicleModelSelect = document.getElementById('vehicle-model');
            vehicleModelSelect.innerHTML = '<option value="">اختر موديل المركبة</option>';
            data.forEach(model => {
                const option = document.createElement('option');
                option.value = model.id;
                option.textContent = model.name;
                vehicleModelSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading vehicle models:', error));
}

function loadFuelTypes() {
    fetch('/api/fuel-types')
        .then(response => response.json())
        .then(data => {
            const fuelTypeSelect = document.getElementById('fuel-type');
            fuelTypeSelect.innerHTML = '<option value="">اختر نوع الوقود</option>';
            data.forEach(type => {
                const option = document.createElement('option');
                option.value = type.id;
                option.textContent = type.name;
                fuelTypeSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading fuel types:', error));
}

document.getElementById('vehicle-evaluation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        vehicle_type: formData.get('vehicle_type'),
        vehicle_model: formData.get('vehicle_model'),
        general_appearance: formData.get('general_appearance'),
        engine_performance: formData.get('engine_performance'),
        transmission: formData.get('transmission'),
        brake_system: formData.get('brake_system'),
        fuel_type: formData.get('fuel_type'),
        fuel_consumption: parseFloat(formData.get('fuel_consumption')),
        maintenance_schedule: formData.get('maintenance_schedule'),
        maintenance_history: formData.get('maintenance_history'),
        accessories: formData.get('accessories'),
        technical_specs: formData.get('technical_specs'),
        market_value: parseFloat(formData.get('market_value')),
        unusual_sounds: formData.get('unusual_sounds'),
        warning_lights: formData.get('warning_lights'),
        performance_issues: formData.get('performance_issues')
    };

    fetch('/api/evaluations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>${result.message}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>فشل في إرسال البيانات إلى الخادم: ${error.message}</p>`;
    });
});
