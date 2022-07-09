import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import appSlice from './slice/appSlice'
// import gallerySlice from './slices/gallerySlice'
// import contactSlice from './slices/contactSlice'

const reducer = combineReducers({
    appSlice
    // gallerySlice,
    // contactSlice
})

const store = configureStore({
    reducer
})

export default store
