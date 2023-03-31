import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthUser, IUser, TCreateUser, UserState } from './types';
import isEqual from 'lodash/isEqual';



const initialState: UserState = {
    users: [],
    currentUser: {} as IUser,
};

const API_URL = 'http://localhost:3001'

// регистрирует пользователя
export const registration = createAsyncThunk('user/registration', async (newUser: TCreateUser) => {
    const data = await axios.post(`${API_URL}/users`, newUser)
    const user = data.data
    return user
});

// авторизирует пользователя
export const auth = createAsyncThunk('user/authorization', async (currUser: IAuthUser) => {
    const data = await axios.get(`${API_URL}/users`)
    const users: IUser[] = data.data
    let result: any = {} as IUser

    users.forEach(user => {
        if(user.login === currUser.login && user.password === currUser.password) {
            result = user
        }
    });

    return result
});

export const edit = createAsyncThunk('user/edit', async (payload: IUser) => {
    const response = await axios.put(`${API_URL}/users/${payload.id}`, payload);
    return response.data;
});




export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(auth.fulfilled, (state, action) => {
            state.currentUser = action.payload
        }).addCase(registration.fulfilled, (state, action) => {
            state.currentUser = action.payload
        }).addCase(edit.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
    },
});

export const { } = user.actions

export default user.reducer