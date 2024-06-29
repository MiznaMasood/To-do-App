import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Para from './Para';
import imagePath from './images.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <img src={imagePath} alt="Example" />
       <h1>React</h1>
       <Para />
    </div>
   
   
  )
}

export default App
