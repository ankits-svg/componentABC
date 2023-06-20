import React from 'react'
import {useSelector} from 'react-redux'

export const ComponentsC = () => {
    const data=useSelector((store)=>store.value)
//   console.log("data111:",data)
  return (
    <div>
       <h1>ComponentC:{data}</h1> 
    </div>
  )
}
