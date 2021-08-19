/* eslint-disable no-console */
import React, { useEffect, useContext } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import { ShoppingOutlined } from '@ant-design/icons';
import { useSession } from 'next-auth/client';
import { MainContext } from '../../context/Context';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const {
    isModalVisible, setIsModalVisible, cart, setCart,
  } = useContext(MainContext);
  const [session] = useSession();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const postData = async () => {
    try {
      await fetch(`/api/cart/${session?.user?.email}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: cart,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session) {
      postData();
    }
  }, [cart]);

  useEffect(() => {
    axios('/api/cart', {
      params: {
        user_email: session?.user?.email,
      },
    })
      .then((res) => (res.data.data[0] ? setCart(res.data.data[0].products) : setCart([])));
  }, [session]);

  const setAmount = async (option:String, id:any) => {
    const cartItem:Array<any> = cart.filter((i:any) => i.id === id);
    option === "plus" ? cartItem[0].amount += 1 : cartItem[0].amount -= 1; 
    const newCart:any = cart.map((i:any) => (i.id === id ? cartItem[0] : i));
    setCart(newCart);
  };

  const deleteFromCart = (id:any) => {
    const newCart:any = cart.filter((i:any) => i.id !== id);
    setCart(newCart);
  };
  
  return (
    <>
      <ShoppingOutlined className="card-icon" onClick={showModal} />
      <Modal footer={null} title="Your cart" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {session ? 
        cart.length > 0
          ? cart.map((i:any) => (
            <CartItem
              key={i.id}
              id={i.id}
              img={i.img}
              title={i.title}
              price={i.price}
              amount={i.amount}
              setAmount={setAmount}
              deleteItem={deleteFromCart}
            />
          ))
          : (
            <div>
              <h1>No items in cart</h1>
            </div>
          )
        : <div><h1>Sign in to use cart</h1> </div>
        }
      </Modal>
    </>
  );
};

export default Cart;