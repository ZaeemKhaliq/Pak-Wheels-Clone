import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import carSlice from '../Reducer/CarSlice';

const store = configureStore({
    reducer: {
        carSlice
    }
})

export default store;