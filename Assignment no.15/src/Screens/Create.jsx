import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    phone:''
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/Users' , data).then((res) =>{
      alert("created successfully")
      navigate('/')
    }).catch((err) => console.log(err))
  }
  return (
   <form onSubmit={(handleSubmit)}>
    <Paper>
    <Typography m={4}>Create User</Typography>
      <TextField onChange={(e) => setData({...data, name:e.target.value})} label = "name" m={2}/>
      <TextField onChange={(e) => setData({...data, email:e.target.value})} label = "email" m={2}/>
      <TextField onChange={(e) => setData({...data, phone:e.target.value})} label = "phone" m={2}/>
      <TextField onChange={(e) => setData({...data, username:e.target.value})} label = "username" m={2}/>
        <Button  type='submit'>Add</Button>
    </Paper>

   </form>
  )
}

export default Create
