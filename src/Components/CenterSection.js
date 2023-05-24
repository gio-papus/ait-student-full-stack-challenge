import React, { useContext} from "react";
import ImgContext from "../Context/ImgContext";
import MemesCard from "./Cards/MemesCard";
import Context from "../Context/Context";
import MemesCard2 from "./Cards/MemesCard2";

function CenterSection() {

  const {  handleImg } = useContext(Context);
  const { getImg } = useContext(ImgContext);
//   const filterImg = getImg.filter((img) => {
//     return img.rol === "meme"
// })
const filteredImg = getImg?.filter((img) => img.rol === "meme");
console.log(filteredImg)
const reverseFilteredMemes=filteredImg?.reverse()
  return (
    <>
  
  <div className="max-h-screen  overflow-y-auto scrollbar-hide ">

    {!handleImg ? (
        <div className="max-h-screen overflow-y-auto grid grid-cols-4 gap-8 scrollbar-hide">
        {reverseFilteredMemes?.map((props) => {
              
        return   <MemesCard key={props._id} props={props}/>;
        
      })}
        </div>
      ) : (
        <center >
            {reverseFilteredMemes?.map((props) => {
        return <MemesCard2 key={props._id} props={props}/>;
        
      })}
        </center>
      )}
  </div>
    </>
  );
}


export default CenterSection;
