import { configureStore } from '@reduxjs/toolkit';
import order from './order/order';
import user from './user/user';
import bookmark from './bookmark/bookmark';

export const store = configureStore({
    reducer: {
        order,
        user,
        bookmark,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
