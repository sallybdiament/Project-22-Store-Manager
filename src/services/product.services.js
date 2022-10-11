const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
   const product = await productModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 404, message: 'Product not found' };
};

module.exports = { 
  findAll,
  findById,
};