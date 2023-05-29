import React, { useContext } from 'react';
import ImgContext from '../Context/ImgContext';

function EachImgPage({ imgId }) {
  const { getImg } = useContext(ImgContext);
   const img = getImg.find((img) => img.id === imgId);
  

  return (
    <div>
      <img alt='' src={img.url} />
    </div>
  );
}

export default EachImgPage;
