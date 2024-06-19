describe('Material API Tests', () => {
    let id="";
    it('Crear nuevo material(Test)', () => {
      const newMaterial = {
        nombreMaterial: 'Test Material',
        precio: 10.5,
        cantidad: 100,
        udm:"u",
        detalle: 'Test Detail',
        categoria: 'test',
        fecha: new Date().toISOString()
      };
  
      cy.request('POST', 'http://localhost:3000/ApiMinig/Materiales/AddMaterial', newMaterial)
        .then((response) => {
          id=response.body.material;
          expect(response.status).to.eq(200);
          expect(response.body.material).to.have.property('_id');
        });
    });

    it('Crear nueva salida para el material(Test)', () => {
      const newSalida = {
          material_ID: id._id,
          salida:{
              fecha: new Date().toISOString(),
              nombreTrabajador:"Miguel Test",
              cantidad:50,
              observacion:"Test Detail"
          }
      };
      cy.request('POST', 'http://localhost:3000/ApiMinig/Materiales/AddSalida', newSalida)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message','Salida registrada');
      });
    });
    it('Validación de reporte del material de salida(Test)', () => {
      const objeto = {
        entrada_ID: id.entradas[id.entradas.length-1]._id,
      };
      cy.request('POST', 'http://localhost:3000/ApiMinig/Materiales/AllSalidas/'+id._id, objeto)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('status',true);
      });
    });
    it('Borrar el material(test)', () => {
      cy.request('DELETE', `http://localhost:3000/ApiMinig/Materiales/DeleteMaterial/${id._id}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Material eliminado');
        });
    });
});
  