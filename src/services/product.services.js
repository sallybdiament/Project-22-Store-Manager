const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return products;
};

const findById = async (productId) => {
   const product = await productModel.findById(productId);
  return product;
};

const createProduct = async (name) => {
  const newProductId = await productModel.insert({ name });
  const newProduct = await productModel.findById(newProductId);

  return newProduct;
};

module.exports = { 
  findAll,
  findById,
  createProduct,
};