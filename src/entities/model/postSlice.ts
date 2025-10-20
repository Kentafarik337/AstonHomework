import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Post} from '../post/ui/PostCard';

const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addMany: postsAdapter.addMany,
    setAll: postsAdapter.setAll,
  },
});

export const postActions = postSlice.actions;
export const postSelectors = postsAdapter.getSelectors((state: any) => state.posts);
export default postSlice.reducer;
