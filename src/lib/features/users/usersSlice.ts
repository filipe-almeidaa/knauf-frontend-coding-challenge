import { getUsersListAction } from '@/lib/features/users/usersActions';
import { UserModel } from '@/models/user.model';
import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';

export interface UsersState {
  usersList: UserModel[] | null;
  usersLoading: boolean;
  usersError: string | null;
}

const initialState: UsersState = {
  usersList: null,
  usersLoading: false,
  usersError: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UsersState>) => {
    builder
      .addCase(getUsersListAction.pending, (state) => {
        state.usersLoading = true;
        state.usersError = null;
      })
      .addCase(getUsersListAction.fulfilled, (state, { payload }) => {
        state.usersList = payload;
        state.usersLoading = false;
      })
      .addCase(getUsersListAction.rejected, (state, action) => {
        state.usersLoading = false;
        state.usersError = action.payload ?? null;
      });
  },
});

export default usersSlice.reducer;
