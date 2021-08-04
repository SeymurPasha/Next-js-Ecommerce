import React from 'react';
import ProductSize from '../ProductSize/ProductSize';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductColor from '../ProductColor/ProductColor';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductDescription from '../ProductDescription/ProductDescription';
import AddProduct from '../AddProduct/AddProduct';

interface Props {
  addProductToCart : () => void,
  product:Object[]
}

const ProductDetails = ({ product, addProductToCart } : Props) => (
  <div className="product-details">
    <ProductInfo product={product} />
    <ProductPrice product={product} />
    <ProductDescription product={product} />
    <div className="product-options">
      <ProductSize />
      <ProductQuantity />
      <ProductColor />
    </div>
    <AddProduct addProductToCart={addProductToCart} />
  </div>
);

export default ProductDetails;