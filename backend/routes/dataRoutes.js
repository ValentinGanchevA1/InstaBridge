// routes/dataRoutes.js
const express = require('express');
const { getData, addData, updateData, deleteData } = require('../controllers/dataController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getData);
router.post('/', authMiddleware, addData);
router.put('/:id', authMiddleware, updateData);
router.delete('/:id', authMiddleware, deleteData);

module.exports = router;
