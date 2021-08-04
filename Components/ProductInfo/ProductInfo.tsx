import React from 'react';

interface Props {
  product:{
    title:string
  }
}
const ProductInfo:React.FC<Props> = ({ product } : Props) => (
  <div className="product-info">
    <h2>{product.title}</h2>
  </div>
);

export default ProductInfo;