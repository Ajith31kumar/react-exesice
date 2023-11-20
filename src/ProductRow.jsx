import React from 'react';

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <tr>
      <td style={{ textAlign: 'center' }}>{name}</td>
      <td style={{ textAlign: 'center' }}>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
