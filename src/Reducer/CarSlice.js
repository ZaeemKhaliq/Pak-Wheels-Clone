import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
        storeCar: (state,action) => {
            return state = action.payload;
        }
    }
})

export const {storeCar} = carSlice.actions;
export default carSlice.reducer;