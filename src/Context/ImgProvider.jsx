import React, { useEffect, useState } from 'react'
import ImgContext from './ImgContext'
import axios from 'axios'
import { toast } from 'react-hot-toast'


function ImgProvider({children}) {
    
  const[getImg,setImg]=useState()
  const[addName,setAddName]=useState()
  const[rol,setRol]=useState()
  const[url,setUrl]=useState()
useEffect(() => {

    function img(){
        fetch('http://localhost:9000/images/', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        
        setImg(data)
        
      })
      .catch(error => {
   
        console.error('Error:', error);
      });
    }
  img()  

}, [])
console.log(getImg)

const addItem = async (e) => {

  try{
    const res = await axios.post('http://localhost:9000/images', {
      name:addName,
      rol:rol,
      url:url
    })
    const newData=await res.json()
    setImg(prev => [...prev, res.data]);
    setAddName('');
    if(newData.ok){
      
      toast.success("Archive imported")
    }else{
      toast.error("Not implemented")
    }
  }catch(err){
    console.log(err);
  }
}
  return (
  <ImgContext.Provider 
  value={{
   getImg,
   setImg,
   addItem,
   setRol,
   setUrl,
   setAddName,
   addName,
   rol,
   url
  }}>
  {children}
  </ImgContext.Provider>
  )
}

export default ImgProvider