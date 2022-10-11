const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return result;
};

const findById = async (saleId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  return product;
};

module.exports = {
  findAll,
  findById,
};