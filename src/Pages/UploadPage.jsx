import React, { useContext } from 'react';
import Header from '../Components/Header';
import ImgContext from '../Context/ImgContext';
import medabot from "../assets/img/meda.png"
import bobobo from "../assets/img/bobobo.png"
import saitama from "../assets/img/saitama.png"



function UploadPage() {
  const { rol, setRol, addName, setAddName, url, setUrl, addItem } = useContext(ImgContext);
  console.log(rol);

  const handleNameChange = (e) => {
    setAddName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleRolChange = (e) => {
    setRol(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };
  // bg-[url('https://images3.memedroid.com/images/UPLOADED60/5b1c9724ac82e.jpeg')]
  return (
    <>
      <Header />
      <center className="justify-center items-center relative ">
    <img alt='' src={saitama} className='absolute left-[40rem] top-[15rem]'/>

        <img alt='' src={bobobo} className='absolute left-[10rem] top-[10rem]'/>
        <img alt='' src={medabot} className='absolute bottom-[19.5rem] left-[30rem]'/>
        <div className="w-[30rem]  h-[20rem]  mt-[10rem] bg-[#1800b474] flex justify-center items-center ">
          <div className='w-[28rem] h-[19rem] bg-[#0ffcf46d]'>

          <form method="post" action="index" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="bg-[#d4d5dc] mb-[1rem] mt-[3rem] "
              onChange={handleNameChange}
              value={addName}
            /><br/>

            <input
              type="text"
              placeholder="Put URL Here"
              className="bg-[#d4d5dc]  mb-[1rem] "
              onChange={handleUrlChange}
              value={url}
            /><br/>
            <div className='flex flex-col w-fit'>

            <label>
              <input
                type="radio"
                name="Type"
                value="meme"
              
                onChange={handleRolChange}
                checked={rol === 'meme'}
              />
              Meme
            </label><br/>

            <label>
              <input
                type="radio"
                name="Type"
                value="gif"
               
                onChange={handleRolChange}
                checked={rol === 'gif'}
              />
              Gif
            </label><br/>
            </div>

            <button type="submit" className="bg-[#1c211c] text-white " >Submit</button>
          </form>
          </div>
        </div>
      </center>
    </>
  );
}

export default UploadPage;
