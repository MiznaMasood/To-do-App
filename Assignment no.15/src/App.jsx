import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Create from './Create'
import { Route, Routes } from 'react-router-dom'

const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Home />} />          
    <Route path="/create" element={<Create />} />      
  </Routes>   
  )
}

export default App
