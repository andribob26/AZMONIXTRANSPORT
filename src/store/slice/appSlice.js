import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isReload: false
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        reloadHandler: (state, action) => {
            state.isReload = action.payload
        }
    }
})

export const { reloadHandler } = appSlice.actions

export default appSlice.reducer
