// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return product;
};

// const insert = async (passenger) => {
//   const columns = Object.keys(snakeize(passenger))
//     .map((key) => `${key}`)
//     .join(', ');

//   const placeholders = Object.keys(passenger)
//     .map((_key) => '?')
//     .join(', ');

//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO passengers (${columns}) VALUE (${placeholders})`,
//     [...Object.values(passenger)],
//   );

//   return insertId;
// };

module.exports = {
  findAll,
  findById,
  // insert,
};