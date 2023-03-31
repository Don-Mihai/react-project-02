import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrder, OrderState, TCreateOrder } from './types';



const initialState: OrderState = {
    orders: [],
    isLoadingFetch: false
};

const API_URL = 'http://localhost:3001'


// получает все заказы с бэка
export const fetch = createAsyncThunk('order/fetch', async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
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

export const edit = createAsyncThunk('order/edit', async (payload: IOrder) => {
    const response = await axios.put(`${API_URL}/posts/${payload.id}`, payload);
    return response.data;
});




export const order = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.isLoadingFetch = false;
            })
            .addCase(fetch.pending, (state, action) => {
                state.isLoadingFetch = true;
            })
            
    },
});

export const { } = order.actions

export default order.reducer