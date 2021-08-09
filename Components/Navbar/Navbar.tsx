import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import MainLogo from '../MainLogo/MainLogo';
import SearchField from '../Searchfield/SearchField';
import Cart from '../Cart/Cart';
import SignIn from '../Signin/Signin';

const { SubMenu } = Menu;

export default function Navbar() {
  const shoes = ['Classic', 'Sneakers', 'Boots', 'Derby'];
  const clothing = ['Shirt', 'Shoes', 'Pants', 'Shorts'];
  const accessories = ['Hats', 'Sunglasses', 'Watches', 'Bags'];

  return (

    <div className="navbar">
      <MainLogo />
      <Menu mode="horizontal">
        <SubMenu key="men" title="Men">
          <Menu.ItemGroup title="Shoes">
            {shoes.map((i) => <Link href={`/products/ men+${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Clothing">
            {clothing.map((i) => <Link href={`/products/ men+${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accessories">
            {accessories.map((i) => <Link href={`/products/ men+${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Sport">
            {clothing.map((i) => <Link href={`/products/ men+sport+${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="women" title="Women">
          <Menu.ItemGroup title="Shoes">
            {shoes.map((i) => <Link href={`/products/ women ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Clothing">
            {clothing.map((i) => <Link href={`/products/  women ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accessories">
            {accessories.map((i) => <Link href={`/products/ women ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Sport">
            {clothing.map((i) => <Link href={`/products/ women sport ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="kids" title="Kids">
          <Menu.ItemGroup title="Shoes">
            {shoes.map((i) => <Link href={`/products/  kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Clothing">
            {clothing.map((i) => <Link href={`/products/ kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accessories">
            {accessories.map((i) => <Link href={`/products/ kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Sport">
            {clothing.map((i) => <Link href={`/products/ kids sport ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="accesories" title="Accesories">
          <Menu.ItemGroup title="Shoes">
            {shoes.map((i) => <Link href={`/products/  kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Clothing">
            {clothing.map((i) => <Link href={`/products/ kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accessories">
            {accessories.map((i) => <Link href={`/products/ kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Sport">
            {clothing.map((i) => <Link href={`/products/ kids sport ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="Entertainment" title="Entertainment">
          <Menu.ItemGroup title="Shoes">
            {shoes.map((i) => <Link href={`/products/  kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Clothing">
            {clothing.map((i) => <Link href={`/products/ kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accessories">
            {accessories.map((i) => <Link href={`/products/ kids ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Sport">
            {clothing.map((i) => <Link href={`/products/ kids sport ${i}`} key={i}><a href="/#">{i}</a></Link>)}
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
        <div className="section-2">
      <SearchField />
      <SignIn />
      <Cart />
        </div>
     
    </div>
  );
}