import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BookmarkState, TCreateBookmark } from './types';

const initialState: BookmarkState = {
    bookmarks: [],
};

const API_URL = 'http://localhost:3001';

// получает все закладки с бэка
export const fetch = createAsyncThunk('bookmark/fetch', async () => {
    const response = await axios.get(`${API_URL}/bookmarks`);
    return response.data;
});

// создает закладку
export const create = createAsyncThunk('bookmark/create', async (newBookmark: TCreateBookmark) => {
    const data = await axios.post('http://localhost:3001/bookmarks', newBookmark);
    const order = data.data;
    return order;
});

// удаляет закладку
export const remove = createAsyncThunk('bookmark/remove', async (idBookmark: number) => {
    axios.delete(`http://localhost:3001/bookmarks/${idBookmark}`);
});

export const bookmark = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetch.fulfilled, (state, action) => {
            state.bookmarks = action.payload;
        });
    },
});

export default bookmark.reducer;
