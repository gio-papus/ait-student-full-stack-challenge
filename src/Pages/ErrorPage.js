import React from 'react'
import error from "../assets/img/Error.jpg"
import logo from "../assets/img/Logo.png"
function ErrorPage() {
  return (
    <div className=''>
    <br/>

      <center className=''>
<img alt='' src={logo}/>
      <p className='text-white text-2xl '>ErrorPage</p>  <br/>

<img alt='' src={error} className=' ' />
      </center>
       
    </div>
  )
}

export default ErrorPage