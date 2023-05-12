import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FilterOrders, IOrder, OrderState, TCreateOrder, TYPE_FILTERS, default_filter_obj } from './types';

const initialState: OrderState = {
    orders: [],
    myOrders: [],
    filterOrders: default_filter_obj,
    isLoadingFetch: false,
};

const API_URL = 'http://localhost:3001';

// получает все заказы с бэка
export const fetch = createAsyncThunk('order/fetch', async () => {
    const response = await axios.get(`/posts`);
    return response.data;
});

// получает заказы по конкретному айдишнику
export const fetchOrdersByUser = createAsyncThunk('order/fetchOrdersByUser', async (idUser: number) => {
    const response = await axios.get(`${API_URL}/posts?userId=${idUser}`);
    console.log(response);
    return response.data;
});

// создает заказ
export const create = createAsyncThunk('order/create', async (newOrder: TCreateOrder) => {
    const data = await axios.post('/posts', newOrder);
    const order = data.data;
    return order;
});

// удаляет заказ
export const remove = createAsyncThunk('order/remove', async (idOrder: object) => {
    axios.post(`/order-delete/`, idOrder);
});

export const edit = createAsyncThunk('order/edit', async (payload: IOrder) => {
    const response = await axios.put(`/order-edit/${payload.id}`, payload);
    return response.data;
});

export const order = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filterOrders = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.isLoadingFetch = false;
            })
            .addCase(fetch.pending, (state, action) => {
                state.isLoadingFetch = true;
            })
            .addCase(fetchOrdersByUser.fulfilled, (state, action) => {
                state.myOrders = action.payload;
            });
    },
});

export const { setFilter } = order.actions;

export default order.reducer;
