import React from 'react';

interface Props {
  product:{
    price:string,
    currency_code:string
  }
}
const ProductSize:React.FC<Props> = ({ product } : Props) => (
  <div className="product-price">
    <span>{`${product.price} ${product.currency_code}`}</span>
  </div>
);

export default ProductSize;