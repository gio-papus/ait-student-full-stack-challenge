import React, { useContext } from 'react'
import Context from '../../Context/Context';

function MemesCard2({props}) {
    const { open } = useContext(Context);
  return (
 <>
   <img alt="" onClick={open} className="mb-[3rem]" src={props.url} />
 </>
 
  )
}

export default MemesCard2