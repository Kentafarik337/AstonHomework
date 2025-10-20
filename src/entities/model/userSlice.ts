import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { User } from '../../pages/UserDef';

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addMany: usersAdapter.addMany,
    setAll: usersAdapter.setAll,
  },
});

export const userActions = userSlice.actions;
export const userSelectors = usersAdapter.getSelectors((state: any) => state.users);
export default userSlice.reducer;
