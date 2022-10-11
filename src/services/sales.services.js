const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return sales;
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  return sale;
};

module.exports = {
  findAll,
  findById,
};