import { getUsersListAction } from '@/lib/features/users/usersActions';
import { UserModel } from '@/models/user.model';
import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersState {
  usersList: UserModel[] | null;
  usersLoading: boolean;
  usersError: string | null;
  selectedUser: UserModel | null;
}

const initialState: UsersState = {
  usersList: null,
  usersLoading: false,
  usersError: null,
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action: PayloadAction<UserModel>) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
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
        state.usersList = null;
        state.usersLoading = false;
        state.usersError = action.payload ?? null;
      });
  },
});

export const { selectUser: selectUserAction, clearSelectedUser: clearSelectedUserAction } =
  usersSlice.actions;

export default usersSlice.reducer;
