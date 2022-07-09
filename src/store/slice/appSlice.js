import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transitionStage: "fadeIn"
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers:{
        transitionStageHandler:(state, action)=>{
            state.transitionStage = action.payload
        }
    }
})

export const { transitionStageHandler } = appSlice.actions

export default appSlice.reducer