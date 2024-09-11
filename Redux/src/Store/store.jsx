import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './Slice/CounterSlice'


const store = configureStore({
      reducer:{
            CounterReducer ,
      }
})

export default store