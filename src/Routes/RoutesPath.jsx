import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MemesPage from '../Pages/MemesPage';
import UploadPage from '../Pages/UploadPage';
import ErrorPage from '../Pages/ErrorPage';
import GifsPage from '../Pages/GifsPage';
import ImgContext from '../Context/ImgContext';
import EachImgPage from '../Pages/EachImgPage';

function RoutesPath() {
  const { getImg } = useContext(ImgContext);


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/gifs/upload" element={<UploadPage />} />
        <Route path="/" element={<MemesPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/gifs" element={<GifsPage />} />
        {/* {getImg?.map((img) => (
          
          <Route
            key={img.id}
            path={`/gifs/${img.id}`}
            element={<EachImgPage img={img} />}
          />
        ))} */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
