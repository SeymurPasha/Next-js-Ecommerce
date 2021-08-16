import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function ProductSize() {
  return (
    <div className="product-color">
      <h4>Color</h4>
      <Select className="select-color" placeholder="Color" >
        <Option disabled value="NA">NA</Option>
      </Select>
    </div>
  );
}