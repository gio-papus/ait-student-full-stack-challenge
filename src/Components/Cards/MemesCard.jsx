import React, { useContext } from "react";
import Context from "../../Context/Context";

function MemesCard({props}) {
  const { open } = useContext(Context);

  return (
    <>
      
          <img key={props._id}
            alt=""
            onClick={open}
            className="max-w-[15rem] object-cover max-h-[10rem] "
            src={props.url}
          />
        
      
    </>
  );
}

export default MemesCard;