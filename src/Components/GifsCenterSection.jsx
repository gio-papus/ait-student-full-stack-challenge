import React, { useContext} from "react";
import ImgContext from "../Context/ImgContext";
import GifsCard from "./Cards/GifsCard";


function GifsCenterSection() {
 

  const { getImg } = useContext(ImgContext);

  const filteredImgGifs = getImg?.filter((img) => img.rol === "gif");
  const reverseFilteredImgGifs=filteredImgGifs?.reverse()
  
  return (
  
    <div className="max-h-screen overflow-auto grid grid-cols-5 gap-4 justify-between scrollbar-hide">
  {reverseFilteredImgGifs?.map(({ _id, name, url }) => {
    return (
      <div key={_id} className="col-span-1">
        <GifsCard name={name} url={url} />
      </div>
    );
  })}
</div>

  
  );
}

export default GifsCenterSection