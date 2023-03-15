import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};





export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
            console.log(state.value)
        },
        decrement: state => {
            state.value -= 1;
            console.log(state.value)
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counter.actions

export default counter.reducer