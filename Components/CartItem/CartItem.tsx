import React from 'react';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface Props {
  id:string;
  img:string;
  title:string;
  price:string;
  amount:string;
  setAmount:string;
  deleteItem:string;
  currency_code:string;
}

export default function CartItem({
  id, img, title, price, amount, setAmount, deleteItem, currency_code
} : Props) {
  const itemPrice = amount * parseInt(price, 10)
  return (
    <div className="cart-item">
      <div style={{display:'flex'}}>
      <img src={img} alt="" />
      <div style={{display:'flex', flexDirection:'column'}}>
      <h5>{title}</h5>
      <h4>{`${itemPrice} ${currency_code}`}</h4>
      </div>
      
      </div>
      
     
      <div className="btns">
      <button type="button" onClick={() => setAmount('minus', id)}><MinusOutlined /></button>
      {amount}
      <button type="button" onClick={() => setAmount('plus', id)}><PlusOutlined /></button>
      <button type="button" onClick={() => deleteItem(id)}><DeleteOutlined /></button>
      </div>
      
    </div>
  );
}