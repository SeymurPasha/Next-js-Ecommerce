import React from 'react';

interface Props {
  product:{
    materials:string,
    quantity:string,
    taxonomy_path:string
  }
}
const ProductDescrition:React.FC<Props> = ({ product } : Props) => (
  <div className="product-description">
    <div>
      <h5>Materials</h5>
      {product.materials.length > 0 ? product.materials[0] : 'N/A'}
    </div>
    <div>
      <h5> Available quantity</h5>
      {product.quantity}
    </div>
    <div>
      <h5> Category</h5>
      {product.taxonomy_path[1]}
    </div>
  </div>
);

export default ProductDescrition;