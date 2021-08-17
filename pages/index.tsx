import React from 'react';
import ImageGallery from '../Components/imageGallery/ImageGallery';
import RecommendedItems from '../Components/RecommendedItems/RecommendedItems';
import Delimeter from '../Components/Delimeter/Delimeter';

export async function getStaticProps() {
  const res = await fetch('https://openapi.etsy.com/v2/listings/active?api_key=78pwg3cv7qq8f16h74a0yf6v&includes=Images&limit=100');

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default function Home(props:any) {
  const rcmdItems1 = props.data.results.filter((i:any) => i.taxonomy_path[0] === 'Clothing' || 'Home & Living').slice(0, 6);
  const rcmdItems2 = props.data.results.filter((i:any) => i.taxonomy_path[0] === 'Craft Supplies & Tools').slice(0, 6);
  const rcmdItems3 = props.data.results.filter((i:any) => i.taxonomy_path[0] === 'Jewelry').slice(0, 6);
  const imageGallery = props.data.results.slice(55, 80);
  return (
    <div className="homepage">
      <RecommendedItems title="Clothing" shape="square" products={rcmdItems1} />
      <RecommendedItems title="Craft Supplies/Tools" shape="square" products={rcmdItems2} />
      <RecommendedItems title="Jewellery" shape="rounded" products={rcmdItems3} />
      <ImageGallery products={imageGallery} />
      <Delimeter />
    </div>
  );
}