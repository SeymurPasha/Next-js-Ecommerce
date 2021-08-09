import React from 'react';

interface Props {
  product:{
    title:string
  }
}
const ProductInfo:React.FC<Props> = ({ product } : Props) => (
  <div className="product-info">
    <span>{product.title}</span>
  </div>
);

export default ProductInfo;