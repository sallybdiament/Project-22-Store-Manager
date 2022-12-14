const express = require('express');
const productController = require('../controllers/product.controllers');

const router = express.Router();

router.get('/', productController.listProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);

module.exports = router;
