const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// CRUD routes for inventory
router.get('/products', adminController.getAllProducts);
router.post('/products', adminController.addProduct);
router.put('/products/:id', adminController.updateProduct);
router.delete('/products/:id', adminController.deleteProduct);

module.exports = router;
