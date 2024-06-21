describe('API Testing', () => {
  it('get all products', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      (response) => {
        expect(response.status).to.equal(200);
      }
    );
  });
});
