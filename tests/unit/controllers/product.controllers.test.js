const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const productController = require('../../../src/controllers/product.controllers');


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

describe('Teste de unidade do productController', function () {
  it('Listando os products', async function () {
    const res = {};
    const req = {};
    const productList = mockProducts;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(services.productServices, 'findAll')
      .resolves(productList);

    await productController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productList);
  });

  it('Buscando um produto que existe', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(services.productServices, 'findById')
      .resolves(mockProducts[0]);

    await productController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts[0]);
  });
  it('Buscando um produto que não existe', async function () {
    const res = {};
    const req = {
      params: { id: 4 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(services.productServices, 'findById')
      .resolves(null);

    await productController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  afterEach(sinon.restore);
});