import React from 'react'
import Fruit from './Fruit'

const MapMethod = (props) => {
    const fruits = [
        {
            name:"Apple",
            price:10,
            emoji:"🍎",
            soldout:false
        },
        {
            name:"Banana",
            price:7,
            emoji:"🍌",
            soldout:true
        },
        {
            name:"mango",
            price:2,
            emoji:"🥭",
            soldout:false
        },
        {
            name:"grapes",
            price:3,
            emoji:"🍇",
            soldout:true
        },
    ]
  return (
    <div>
  {
    fruits.map(fruits=>
        
        (   <Fruit key={fruits.name} name={fruits.name} price={fruits.price} emoji={fruits.emoji} soldout = {fruits.soldout} />    )
      
        
    
        
       
    )
  }
    </div>
  )
}

export default MapMethod
