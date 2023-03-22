import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { OrderState, TCreateOrder } from './types';



const initialState: OrderState = {
    orders: [],
    isLoading: false
};


// получает все заказы с бэка
export const fetch = createAsyncThunk('order/fetch', async () => {
    const data = await axios.get('http://localhost:3001/posts');
    const orders = data.data
    return orders
});

// создает заказ
export const create = createAsyncThunk('order/create', async (newOrder: TCreateOrder) => {
    const data = await axios.post('http://localhost:3001/posts', newOrder)
    const order = data.data
    return order
});

// удаляет заказ
export const remove = createAsyncThunk('order/remove', async (idOrder: number) => {
    axios.delete(`http://localhost:3001/posts/${idOrder}`)
});


export const order = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.orders = action.payload;
            })
            .addCase(fetch.pending, (state, action) => {
                state.isLoading = true;
            });
    },
});

export const { } = order.actions

export default order.reducer