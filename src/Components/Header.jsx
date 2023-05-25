import React, { useContext, useState } from 'react'
import Logo from "../assets/img/Logo.png"
import Add from "../assets/img/Add.png"
import { Link, useLocation } from 'react-router-dom'
import ImgContext from '../Context/ImgContext';
import Search from './Search';

function Header() {
  const { getImg } = useContext(ImgContext);
    const location=useLocation()
    const[searchValue,setSearchValue]=useState("")
    const [searchResults, setSearchResults] = useState([]);
    const[searchModal,setSearchModal]=useState(false)

    const handleSearchModal=()=>{
      setSearchModal(!searchModal)
    }
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);


    const filteredResults = getFilteredResults(value);
    setSearchResults(filteredResults);
  };

  const getFilteredResults = (value) => {
    
    const filteredResults = getImg.filter((img) => {
      return img.name.toLowerCase().includes(value.toLowerCase());
    });

    return filteredResults;
  };
  return (
    <div className='flex justify-evenly border-bottom border-b-4 border-[#30FC0F]'>
        <img alt='' src={Logo} className=''/>
        <div className='flex items-center gap-8'>
            <Link to="/">
            <p className={` cursor-pointer  ${location.pathname === "/" ? 'text-[#30FC0F] border-b-4 m-0 border-[#30FC0F] text-xl' : 'text-white'}`}>Memes</p>
            </Link>
            
            <Link to="/gifs">
            <p className={` cursor-pointer  ${location.pathname === "/gifs" ? 'text-[#30FC0F] border-b-4 m-0 border-[#30FC0F] text-xl' : 'text-white'}`}> Gifs</p>
            </Link>
            
            <Link>
            <p  className="bg-gradient-to-t  from-[#7C8BBF] via-[#7C8BBF] hover:bg-[#7C8BBF] hover-[#7C8BBF] transition-all duration-500 cursor-pointer">Cats</p>
            </Link>
            
            <Link>
            <p  className="bg-gradient-to-t  from-[#DB622E] via-[#DB2E2E] hover:bg-[#7C8BBF] hover-[#7C8BBF] transition-all duration-500 cursor-pointer">Dogs</p>
            </Link>
            
            <Link>
            <p  className="bg-gradient-to-t  from-[#04FBCE] via-[#7C8BBF] hover:bg-[#7C8BBF] hover-[#7C8BBF] transition-all duration-500 cursor-pointer">Others</p>
            </Link>
       
            <input type='search' className={`w-[30rem] h-[2rem] bg-[#D9D9D9] cursor-pointer relative`} 
           onChange={(e) => {
            handleSearch(e);
            handleSearchModal();
          }} 
            value={searchValue}
         
            />
{searchModal&&
  searchResults.map((results)=>{
    return <Search key={results._id} id={results._id} url={results.url} name={results.name}  />
  })
}
            <Link to="upload">

            <img alt='' src={Add} className='w-[3rem] cursor-pointer h-[3rem] '/>
            </Link>
        </div>
    </div>
  )
}

export default Header