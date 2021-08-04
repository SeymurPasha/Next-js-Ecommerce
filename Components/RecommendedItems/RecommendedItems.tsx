import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

interface Props {
  shape:string;
  title:string;
  props: Object[];
}

interface ItemsInterface {
  listing_id: string | null | undefined;
  Images: any;
  price: string;
  currency_code:string;
}

export default function RecommendedItems({ title, shape, products }:Props) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://openapi.etsy.com/v2/listings/active?api_key=78pwg3cv7qq8f16h74a0yf6v&includes=Images&tags=shoes&tags=${tags}&limit=6`)
  //     .then((res) => {
  //       setProducts(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="recommended-items">
      <h3>{title}</h3>
      <div className="recommended-products">
        {products.length > 0 ? products.map((item:ItemsInterface) => (
          <Link key={item.listing_id} href={`/product/${item.listing_id}`}>
            <a target="_blank">
              <Card
                hoverable
                className={shape}
                key={item.listing_id}
                size="small"
                cover={item.Images ? <img alt="example" src={item.Images[0].url_170x135} /> : <img alt="example" src="" />}
              >
                <Meta className="meta" title={`${item.currency_code} ${item.price}`} />
              </Card>
            </a>
          </Link>
        )) : null }
      </div>
    </div>
  );
}