import React from 'react'

const Fruit = ({name,price,emoji,soldout}) => {
  return (
    <ul>
  <li>
      {/* <h1>{emoji} {name} {price}</h1> */}
{
   
    
    <h3>{emoji} {name} {price} <u>{ soldout ? "soldout" : ""}</u> </h3>

    
  
}

      </li>
      </ul>
  )
}

export default Fruit
