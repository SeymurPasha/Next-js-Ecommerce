import React from 'react';
import Link from 'next/link';
import { Carousel, Skeleton } from 'antd';

interface Props {
  products:Object[];
}

export default function ImageGallery({ products } : Props) {
  return (
    <Carousel
      autoplay
      autoplaySpeed={2000}
      slidesToShow={8}
      dots={false}
    >
      {products.map((i:any) => (
        <Link key={i.listing_id} href={`/product/${i.listing_id}`}>
          <a target="_blank" href={`/product/${i.listing_id}`} rel="noreferrer">
            <div key={i.listing_id}>
              {i.Images[0] ? <img src={i.Images[0].url_170x135} alt="" /> : <Skeleton.Image /> }
            </div>
          </a>
        </Link>
      ))}
    </Carousel>
  );
}