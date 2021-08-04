import React from 'react';

interface Props {
  id:string;
  img:string;
  title:string;
  price:string;
  amount:string;
  setAmount:string;
  deleteItem:string;
}

export default function CartItem({
  id, img, title, price, amount, setAmount, deleteItem,
} : Props) {
  return (
    <div>
      <img src={img} alt="" />
      <h5>{title}</h5>
      <h5>{amount * parseInt(price, 10)}</h5>
      <button type="button" onClick={() => setAmount('minus', id)}>-</button>
      {amount}
      <button type="button" onClick={() => setAmount('plus', id)}>+</button>
      <button type="button" onClick={() => deleteItem(id)}>delete</button>
    </div>
  );
}