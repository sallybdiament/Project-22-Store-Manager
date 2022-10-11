const { productServices } = require('../services');

const listProducts = async (_req, res) => {
  const products = await productServices.findAll();

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productServices.findById(id);
  if (!product) {
  return res.status(404).json({ message: 'Product not found' }); 
  } 
  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productServices.createProduct(name);
  if (!newProduct.name) { return res.status(400).json({ message: '"name" is required' }); }
  if (newProduct.name.length < 5) {
    return res.status(422).json({
      message: '"name"length must be at least 5 characters long' });
  }
  return res.status(201).json(newProduct);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
};