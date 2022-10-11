const { productServices } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productServices.findAll();

  if (type) return res.status(404).json(message);

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productServices.findById(id);
  if (!product) {
 return res.status(404).json({ message: 'Product not found' }); 
} 

  return res.status(200).json(product);
};

module.exports = {
  listProducts,
  getProduct,
};