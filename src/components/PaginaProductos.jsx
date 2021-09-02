import React from 'react';

const PaginaProductos = () => {
  return (
    <>
      <h2>Listando productos</h2>
      <table>
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Precio</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Zapatillas</td>
                  <td>$ 9420</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Remera</td>
                  <td>$ 2420</td>
              </tr>
          </tbody>
      </table>
    </>
  );
};

export default PaginaProductos;
