const { salesServices } = require('../services');

const listSales = async (_req, res) => {
  const sales = await salesServices.findAll();

  res.status(200).json(sales);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.findById(id);
  if (!sale) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sale);
};

module.exports = {
  listSales,
  getSale,
};