import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Table from './CustomTable'

const Home = () => {
    const [userData , setUserData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/Users').then((response)=>{
            setUserData(response.data)
        }).catch((err) => alert(err))
    },[])
  return (
    <div>
      <Button onClick={() => {
        navigate('/create')
      }}>Create User   </Button>
       <Table data={userData}/>

    
    </div>
  )
}

export default Home
