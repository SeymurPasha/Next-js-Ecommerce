import React, { useContext } from 'react';
import { useSession } from 'next-auth/client';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps } from 'next';
import ProductGallery from '../../Components/ProductGallery/ProductGallery';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import { MainContext } from '../../context/Context';

interface IParams extends ParsedUrlQuery {
  context: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;
  const res = await fetch(`https://openapi.etsy.com/v2/listings/${id}?api_key=78pwg3cv7qq8f16h74a0yf6v&includes=Images`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { item: data.results }, // will be passed to the page component as props
  };
};
const Product = ({ item } : { item:any }) => {
  const { cart, setCart } = useContext(MainContext);
  const [session] = useSession();

  const createCartItem = () => {
    if (session) {
      const newItem = {
        id: item[0].listing_id,
        user_email: session.user?.email,
        img: item[0].Images[0].url_75x75,
        title: item[0].title,
        price: item[0].price,
        amount: 1,
      };
      setCart([...cart, newItem]);
    } else {
      // eslint-disable-next-line no-alert
      alert('Please sign in to add to cart');
    }
  };
  const { Images } = item[0];

  return (
    <div className="product">
      <ProductGallery images={Images} />
      <ProductDetails product={item[0]} addProductToCart={createCartItem} />
    </div>
  );
};

export default Product;