const { productServices } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productServices.findAll();

  if (type) return res.status(404).json(message);

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.findById(id);

  if (type) return res.status(404).json(message);

  res.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
};