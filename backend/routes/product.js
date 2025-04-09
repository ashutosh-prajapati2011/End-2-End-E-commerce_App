const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Public route
router.get('/', getAllProducts);

// Admin-only routes
router.post('/admin/add', verifyAdmin, addProduct);
router.put('/admin/update/:id', verifyAdmin, updateProduct);
router.delete('/admin/delete/:id', verifyAdmin, deleteProduct);

module.exports = router;
