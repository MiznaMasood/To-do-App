import { createSlice } from "@reduxjs/toolkit"

const initialState = {
      counter:0,
}

const CounterSlice = createSlice({
      name:"counter",
      initialState,
      reducers:{
            addCounter:(state,action)=>{
                state.counter=++state.counter;
            },
            minusCounter:(state,action)=>{
                  state.counter=--state.counter> 0 ? --state.counter : 0;
            },
      },
})

const {actions,reducer} = CounterSlice
export const {addCounter,minusCounter} = actions

export default reducer;