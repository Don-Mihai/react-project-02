import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface OrderState {
    orders: object[];
    isLoading: boolean;
}

const initialState: OrderState = {
    orders: [],
    isLoading: false
};


export const fetch = createAsyncThunk('order/fetch', async () => {
    const data = await axios.get('http://localhost:3001/posts');
    const orders = data.data
    return orders
});

export const order = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.orders = action.payload;
                console.log('payload', action.payload);
            })
            .addCase(fetch.pending, (state, action) => {
                console.log('load');
                state.isLoading = true;
            });
    },
});

export const { } = order.actions

export default order.reducer