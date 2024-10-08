// controllers/dataController.js
const Dataset = require('../models/Dataset');

// Fetch Data
const getData = async (req, res) => {
    const { category, startDate, endDate } = req.query;

    let condition = {};
    if (category) condition.category = category;
    if (startDate && endDate) condition.date = { $between: [startDate, endDate] };

    try {
        const data = await Dataset.findAll({ where: condition });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

// Add new data
const addData = async (req, res) => {
    const { category, value, date } = req.body;

    try {
        const newData = await Dataset.create({ category, value, date });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add data' });
    }
};

// Update data
const updateData = async (req, res) => {
    const { id } = req.params;
    const { category, value, date } = req.body;

    try {
        const data = await Dataset.findByPk(id);
        if (!data) return res.status(404).json({ error: 'Data not found' });

        data.category = category;
        data.value = value;
        data.date = date;
        await data.save();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update data' });
    }
};

// Delete data
const deleteData = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Dataset.findByPk(id);
        if (!data) return res.status(404).json({ error: 'Data not found' });

        await data.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete data' });
    }
};

module.exports = { getData, addData, updateData, deleteData };
