import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Screens/Home'
import Create from './Screens/Create'
import { Route, Routes } from 'react-router-dom'
import Edit from './Screens/Edit'

const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Home />} />          
    <Route path="/create" element={<Create />} />  
    <Route path="edit/:id" element={<Edit />} />    
  </Routes>   
  )
}

export default App
