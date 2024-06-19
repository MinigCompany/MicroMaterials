describe('Material SAlida API Tests', () => {
    it('Lista de Materiales', () => {
        cy.request('GET', 'http://localhost:3000/ApiMinig/Materiales/Materiales')
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Material).to.be.an('array');
            expect(response.body.Material).to.have.length.greaterThan(0);
          });
    });
    it('Materiales ordenados desde el menor a mayor', () => {
      cy.request('GET', 'http://localhost:3000/ApiMinig/Materiales/Materiales')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Material).to.be.an('array');
          expect(response.body.Material).to.have.length.greaterThan(0);
      });
    });
    it('Disponibilidad de Materiales segun su saldo', () => {
      cy.request('GET', 'http://localhost:3000/ApiMinig/Materiales/Materiales')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Material).to.be.an('array');
          expect(response.body.Material).to.have.length.greaterThan(0);
      });
    });
})