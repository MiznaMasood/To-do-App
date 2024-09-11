import React from 'react'
import { useDispatch } from 'react-redux'
import  {addCounter, minusCounter } from '../Store/Slice/CounterSlice'

const Btn = () => {
      const dispatch = useDispatch()

      const handleAction = () => {
            dispatch(addCounter())
      }
      const handleAction2 = () => {
            dispatch(minusCounter())
      }
  return (
    <div>
    <button onClick={handleAction}>Inc</button>
    <button onClick={handleAction2}>Dec</button>
    </div>
  )
}

export default Btn
