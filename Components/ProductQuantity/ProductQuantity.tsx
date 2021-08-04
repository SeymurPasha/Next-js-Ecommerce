import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function ProductQuantity() {
  return (
    <div className="product-quantity">
      <h4>Quantity</h4>
      <Select placeholder="Quantity" style={{ width: 120 }}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
      </Select>
    </div>
  );
}