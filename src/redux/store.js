import { configureStore } from '@reduxjs/toolkit'
import category from './reduxSlices/categorySlice'
import userdata from './reduxSlices/userSlice'
import commondata from './reduxSlices/commonSlice'
import { useDispatch } from 'react-redux'


export const store = configureStore({
   reducer: {
   category,
   userdata,
   commondata,
   },
})