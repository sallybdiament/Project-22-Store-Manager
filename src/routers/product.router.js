const express = require('express');
const productController = require('../controllers/product.controllers');

const router = express.Router();

router.get('/', productController.listProducts);

module.exports = router;
