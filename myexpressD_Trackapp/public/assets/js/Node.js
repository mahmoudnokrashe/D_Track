app.get('/api/vehicle-types', (req, res) => {
    db.query('SELECT * FROM vehicle_types', (err, results) => {
        if (err) {
            console.error('Error fetching vehicle types:', err);
            res.status(500).send('Error fetching vehicle types');
            return;
        }
        res.json(results);
    });
});

app.get('/api/vehicle-models', (req, res) => {
    const { type_id } = req.query;
    db.query('SELECT * FROM vehicle_models WHERE type_id = ?', [type_id], (err, results) => {
        if (err) {
            console.error('Error fetching vehicle models:', err);
            res.status(500).send('Error fetching vehicle models');
            return;
        }
        res.json(results);
    });
});

app.get('/api/fuel-types', (req, res) => {
    db.query('SELECT * FROM fuel_types', (err, results) => {
        if (err) {
            console.error('Error fetching fuel types:', err);
            res.status(500).send('Error fetching fuel types');
            return;
        }
        res.json(results);
    });
});
