import { useState } from "react"
import Child from "./Child"
// import HandleSubmit from "./Test"
// import Filter from "./filter"
import MapMethod from "./MapMethod"
import Conditional from "./Conditional"




function App() {
  const[count,setCount] = useState(0)

  return (
    <>
     <Child 
     name= 'Jhon'
     age={20}
     occupation = 'Developer'
     />

<h1>Count:{count}</h1>
<h3><button onClick={()=>setCount(count+1)}>Inc</button></h3>
<h3><button onClick={()=>setCount(count-1)}>Dec</button></h3>



<MapMethod  />

<Conditional />
    </>
  )
}

export default App
