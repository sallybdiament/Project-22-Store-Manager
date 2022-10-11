const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

const mockProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);
  it('Recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);
    const result = await productModel.findAll();
    expect(result).to.be.deep.equal(mockProducts);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
    const result = await productModel.findById(1);
    expect(result).to.be.deep.equal(mockProducts[0]);
  });
});
