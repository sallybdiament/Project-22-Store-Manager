const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return products;
};

const findById = async (productId) => {
   const product = await productModel.findById(productId);
  return product;
};

module.exports = { 
  findAll,
  findById,
};