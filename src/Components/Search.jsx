
import { Link } from 'react-router-dom'


function Search({_id,url,name}) {
 
  return (
    <Link
     to={`/${_id}`} >
        <div className='flex flex-col h-fit bg-'>

    <div className=" rounded    cursor-pointer">
        <div className='flex flex-col'>
            <img src={url} alt="nopicture" className=' rounded' />
     
            <p className='font-bold text-[1.3rem]'>{name}</p>
         
        </div>
    </div>
        </div>
    </Link>
  )
}

export default Search