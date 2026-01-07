require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.get('/applications', (req, res) => {
    const sql = 'SELECT * FROM applications';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.post('/add', (req, res) => {
    const { company_name, role, applied_date, status } = req.body;
    const sql = 'INSERT INTO applications (company_name, role, applied_date, status) VALUES (?, ?, ?, ?)';
    db.query(sql, [company_name, role, applied_date, status], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Application added successfully', id: result.insertId });
    });
});


app.put('/update/:id', (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE applications SET status = ? WHERE id = ?';
    db.query(sql, [status, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Application updated successfully' });
    });
});


app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM applications WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Application deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
