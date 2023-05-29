import React, { useState } from 'react'
import Context from './Context'

function Provider({children}) {

    const [handleImg,setHandleImg]=useState(false)
   


    const open=()=>{
        setHandleImg(!handleImg)
    }

  return (
    <Context.Provider 
    value={{
open,
handleImg


    }

    }>
     {children}
    </Context.Provider>
  )
}

export default Provider