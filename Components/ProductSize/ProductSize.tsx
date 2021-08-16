import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function ProductSize() {
  return (
    <div className="product-size">
      <h4>Size</h4>
      <Select className="select-size" placeholder="Size">
        <Option value="XS">XS</Option>
        <Option value="S">S</Option>
        <Option value="M">M</Option>
        <Option value="L">L</Option>
        <Option value="XL">XL</Option>
      </Select>
    </div>
  );
}