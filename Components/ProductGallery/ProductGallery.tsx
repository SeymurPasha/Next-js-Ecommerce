/* eslint-disable no-console */
import React, { useState } from 'react';

interface Props {
  images:Object[];
}

const ProductGallery:React.FC<Props> = ({ images } :Props) => {
  const initialState = images[0].url_fullxfull;
  const [mainImg, setmainImg] = useState(initialState);

  const changeMainImg = (src:string, e:any) => {
    setmainImg(src);
    const imageArray = document.querySelectorAll('.list-image');
    imageArray.forEach((img) => img.classList.remove('current-image'));
    e.target.classList.add('current-image');

    document.getElementsByClassName('main-image-container')[0].animate([
      { // from
        opacity: 0,
        color: '#fff',
      },
      { // to
        opacity: 1,
        color: '#000',
      },
    ], 500);
  };

  return (
    <div className="product-gallery">
      <div className="image-list">

        {images.slice(0, 5).map((i:any, index:any) => (
          <img
            key={index}
            className="list-image"
            width={100}
            height={100}
            onMouseOver={(e) => changeMainImg(i.url_fullxfull, e)}
            onFocus={() => console.log(true)}
            src={i.url_fullxfull}
            alt=""
          />
        ))}
      </div>
      <div className="main-image-container">
        <img className="main-image" src={mainImg} alt="" />
      </div>
    </div>
  );
};

export default ProductGallery;