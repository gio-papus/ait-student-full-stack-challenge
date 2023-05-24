import React from 'react'
import { Link } from 'react-router-dom'

function GifsCard({_id,url,name}) {
  return (
 <>
 <Link to={`/gifs/${_id}`}>
      <img alt='' className='max-h-[10rem]' src={url} />
 </Link>
 </>

       
  )
}

export default GifsCard