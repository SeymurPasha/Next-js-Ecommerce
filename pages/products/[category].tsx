import React, { useState, useEffect } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Card } from 'antd';
import { GetServerSideProps } from 'next';
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterComponent from '../../Components/FilterComponent/FilterComponent';

const { Meta } = Card;

interface IParams extends ParsedUrlQuery {
  context: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params as IParams;
  const res = await fetch(`https://openapi.etsy.com/v2/listings/active?api_key=78pwg3cv7qq8f16h74a0yf6v&limit=8&includes=Images&tags=${category}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.results,
      category,
    }, // will be passed to the page component as props
  };
};

export default function Products({ products, category } : { products:Object[], category:string }) {
  const [filterBy, setFilter] = useState({
    price: 1000, color: '', material: '', location: '',
  });

  const [moreProducts, setMoreProducts] = useState(products);
  const [offset, setOffset] = useState(1);

  const onChange = (e:any) => {
    setFilter({ ...filterBy, [e.target.name]: e.target.value });
  };

  const getMorePosts = async () => {
    const res = await fetch(`https://next-js-ecommerce-7izyzfuvq-seymurpasha.vercel.app/api/etsyApi?offset=${offset}&category=${category}`);
    const data = await res.json();
    setMoreProducts((prev) => [...prev, ...data.data.results]);
    setOffset(offset + 1);
  };

  useEffect(() => {
    console.log('smt');
    return () => {
      setFilter({
        price: 1000, color: '', material: '', location: '',
      });
    };
  }, []);

  useEffect(() => {
    setMoreProducts(products);
  }, [category]);
  const filteredProducts = moreProducts.filter((i:any) => parseInt(i.price, 10) < filterBy.price);
  return (
    <div className="products">

      <div className="filter-options">
        <FilterComponent
          title="price"
          option1={50}
          option2={300}
          option3={500}
          onChange={onChange}
          value={filterBy.price}
        />
        <FilterComponent
          title="color"
          option1="Red"
          option2="Blue"
          option3="Gray"
          onChange={onChange}
          value={filterBy.color}
        />
        <FilterComponent
          title="material"
          option1="Cotton"
          option2="Wool"
          option3="Silk"
          onChange={onChange}
          value={filterBy.material}
        />
        <FilterComponent
          title="location"
          option1="Anywhere"
          option2="USA"
          option3="Europe"
          onChange={onChange}
          value={filterBy.location}
        />

      </div>

      <div className="test">
        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={getMorePosts}
          hasMore={true}
          loader = {<h1>Loading...</h1>}
        >
          <div className="displayed-products">
            {filteredProducts.map((i:any, index) => (
              <a
                href={`/product/${i.listing_id}`}
                target="_blank"
                key={index}
                rel="noreferrer"
              >

                <Card
                  hoverable
                  key={i.listing_id}
                  className="displayed-products-cart"
                  cover={i.Images[0] ? <img alt="example" src={i.Images[0].url_fullxfull} /> : <img alt="empty" src="" />}
                >
                  <Meta title={`${i.price}  ${i.currency_code}`} />
                </Card>
              </a>
            ))}
          </div>
        </InfiniteScroll>
      </div>

    </div>
  );
}