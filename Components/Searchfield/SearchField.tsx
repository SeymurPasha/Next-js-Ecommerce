import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Search } = Input;

export default function kids() {
  const [suggestions, setsuggested] = useState<String[]>([]);
  const [input, setInput] = useState('');
  const searchData = ['men t-shirt', 'men hat', 'men bag', 'men shoes', 'men sneakers', 'men sport',
    'women t-shirt', 'women hat', 'women bag', 'women shoes', 'women sneakers', 'women sport',
    'kids t-shirt', 'kids hat', 'kids bag', 'kids shoes', 'kids sneakers', 'kids sport'];

  const filterSeacrhData = (e:any) => {
    const { value } = e.target;
    setInput(value);
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'g');
      const res = searchData.sort().filter((v) => regex.test(v));
      setsuggested(res);
    } else {
      setsuggested([]);
    }
  };

  const router = useRouter();
  const onSearch = (value:any) => router.push(`/products/${value}`);
  return (
    <div className="search-field">
      <Space direction="horizontal">
        <Search
          placeholder="Seacrh"
          onSearch={onSearch}
          onChange={filterSeacrhData}
          value={input}
        />
      </Space>
      <div className="search-results">
        {suggestions.map((i:any) => <Link href={`/products/ ${i}`} key={i}><a href="/#">{i}</a></Link>) }
      </div>
    </div>

  );
}