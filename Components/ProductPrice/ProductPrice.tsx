import React from 'react';

interface Props {
  product:{
    price:string,
    currency_code:string
  }
}
const ProductSize:React.FC<Props> = ({ product } : Props) => (
  <div className="product-price">
    <h2>{`${product.price} ${product.currency_code}`}</h2>
  </div>
);

export default ProductSize;