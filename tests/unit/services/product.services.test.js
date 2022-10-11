const { expect } = require('chai');
const sinon = require('sinon');
const productServices = require('../../../src/services/product.services');
const productModel = require('../../../src/models/product.models');

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

describe('Verificando service de product', function () {
  it('listagem completa de productos', async function () {
    sinon.stub(productModel, 'findAll').resolves(mockProducts);
    const result = await productServices.findAll();
    expect(result.message).to.deep.equal(mockProducts);
  });
  it('busca de 1 produto caso ID exista', async function () {
    sinon.stub(productModel, 'findById').resolves(mockProducts[0]);
      
    const result = await productServices.findById(1);

    expect(result).to.deep.equal(mockProducts[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});
