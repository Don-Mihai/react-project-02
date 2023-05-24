import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthUser, IUser, TCreateUser, UserState } from './types';

const initialState: UserState = {
    users: [],
    currentUser: {} as IUser,
};

export const getUserById = createAsyncThunk('user/getUserById', async (idUser: string | null) => {
    const token = localStorage.getItem('id');

    let response: any = {};

    if (idUser) {
        response = await axios.post(`/user/by-id`, { id: idUser });
    } else {
        response = await axios.get(`/user/my`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    return response?.data;
});

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const response = await axios.post(`/user/users`);
    return response.data;
});

// регистрирует пользователя
export const registration = createAsyncThunk('user/registration', async (newUser: TCreateUser) => {
    const data = await axios.post(`/user/register`, newUser);
    const user = data.data;
    return user;
});

// авторизирует пользователя
export const auth = createAsyncThunk('user/authorization', async (currUser: IAuthUser) => {
    const data = await axios.post(`/user/auth`, currUser);

    const user = data.data;

    return user;
});

export const edit = createAsyncThunk('user/edit', async (payload: IUser) => {
    const response = await axios.post(`/user/edit`, payload);
    return response.data;
});

//получение пользователей по айдишнику, свои данные в личном кабинете для каждого пользователя
// получение заказов по определенным критериям (сначала по айдишнику пользователя, а потом и по фильтрам)

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(auth.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            });
    },
});

export const {} = user.actions;

export default user.reducer;
