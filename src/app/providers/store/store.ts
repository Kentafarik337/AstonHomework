import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../../entities/api/postsApi';
import { commentsApi } from '../../../entities/api/commentsApi';
import { usersApi } from '../../../entities/api/usersApi';
import { todosApi} from '../../../entities/api/todosApi';
import { albumsApi } from '../../../entities/api/albumsApi';


export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    //posts: postSlice,
    //users: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware)
      .concat(usersApi.middleware)
      .concat(todosApi.middleware)
      .concat(albumsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;