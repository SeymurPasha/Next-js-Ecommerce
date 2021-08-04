import React from 'react';
import { Radio, Space } from 'antd';

interface Props {
  title:string;
  option1:number | string;
  option2:number | string;
  option3:number | string;
  value:number | string;
  onChange:() => void
}

export default function FilterComponent({
  title, option1, option2, option3, onChange, value,
}:Props) {
  const filterName = title.toUpperCase();
  return (
    <div className="filter-component">
      <h6>{filterName}</h6>
      <Radio.Group onChange={onChange} name={title} value={value}>
        <Space direction="vertical">
          <Radio value={option1}>{option1}</Radio>
          <Radio value={option2}>{option2}</Radio>
          <Radio value={option3}>{option3}</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
}