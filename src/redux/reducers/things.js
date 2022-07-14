import {createSlice} from "@reduxjs/toolkit";

const thingsReducer = createSlice({
    name: 'things',
    initialState: {
        things: [],
        thingsCount: 0
    },
    reducers: {
        getAllProducts : (state, action) => {
            state.things = action.payload.arr;
            state.thingsCount = action.payload.arr.length
        }
    }
});
export default thingsReducer.reducer
export const {getAllProducts} = thingsReducer.actions;