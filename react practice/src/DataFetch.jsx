import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetch = () =>{
const [data , setData] = useState([]);
const[loading,setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
  const DataFetch = async()=>{
    try{
    const response = await axios.get('https://fakestoreapi.com/products');
    setData(response.data);
    setLoading(false)
    }catch(error){
      setError(error.message);
      setLoading(false);
    }
  };
  DataFetch()
}, [])


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ): (
        <>
        {error ? (
            <h1>Error: {error}</h1>
        ) :(
            <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            
            }}
            >
              {data.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt=""
                  style={{
                    width:'100px',
                    height:'100px',
                 
                  }}
                  /> 
                  <h2>{product.title}</h2>
                  <p>Price: ${product.price}</p>
                
                </li>
              ))}
            </ul>
        )
      }
        
        </>
      )
    }
      
    </div>
  )
}

export default DataFetch
