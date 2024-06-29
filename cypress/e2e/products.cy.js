import { productSchema } from '../schemas/product';
import { productsSchema } from '../schemas/products';

describe('API Testing', () => {
  const USER = {
    email: 'customer@test.com',
    password: 'test123',
    accessToken: '',
  };

  before(() => {
    // root-level hook
    // runs once before all tests
    const response = cy
      .request({
        method: 'POST',
        url: 'auth/login',
        body: {
          email: USER.email,
          password: USER.password,
        },
      })
      .then((response) => {
        expect(response.status).to.equal(200);
        const responseBody = response.body;
        USER.accessToken = responseBody.token;
      });
  });

  it('get all products', () => {
    cy.request({
      method: 'GET',
      url: 'products',
      headers: {
        Authorization: `Bearer ${USER.accessToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.jsonSchema(productsSchema);
    });
  });

  it('get a single product', () => {
    cy.request({
      method: 'GET',
      url: 'product/1',
      headers: {
        Authorization: `Bearer ${USER.accessToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.jsonSchema(productSchema);
    });
  });
});
