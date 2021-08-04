import React, { useContext } from 'react';
import { Button } from 'antd';
import { MainContext } from '../../context/Context';

interface Props {
  addProductToCart : () => void
}

const AddProduct = ({ addProductToCart } : Props) => {
  const { setIsModalVisible } = useContext(MainContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="add-product">
      <Button
        onClick={() => {
          addProductToCart();
          showModal();
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddProduct;