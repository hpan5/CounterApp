import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'counter',
    initialState: {
        totalItemNumber: 4,
        totalItemNumber_InTheCart: 0,
        items: [0,0,0,0]
    },
    reducers: {
        increment: (state, action) => {
            const index = action.payload;
            //console.log("incrementing for index: " + action.payload);
            state.totalItemNumber_InTheCart += ((state.items[index] === 0) ? 1 : 0); 
            state.items[index] += 1;
            //console.log("state.totalItemNumber_InTheCart: " + state.totalItemNumber_InTheCart);
        },
        decrement: (state, action) => {
            const index = action.payload;
            state.totalItemNumber_InTheCart -= ((state.items[index] === 1) ? 1 : 0); 
            state.items[index] = Math.max(state.items[index] - 1, 0);
        },
        reset: state => {
            state.items.fill(0);
            state.totalItemNumber_InTheCart = 0;
            console.log("items", state.items);
            console.log("state.totalItemNumber_InTheCart: " + state.totalItemNumber_InTheCart);
        }
    }
});

export const { increment, decrement, reset } = slice.actions;

export default slice.reducer;