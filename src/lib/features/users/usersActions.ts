import { UserModel, UsersFilterModel } from '@/models/user.model';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersListAction = createAsyncThunk<
  UserModel[],
  UsersFilterModel,
  {
    rejectValue: string | null;
  }
>('users/get', async (filter, { rejectWithValue }) => {
  try {
    const searchParams = new URLSearchParams(filter).toString();
    const response: Response = await fetch(`/api/users?${searchParams}`);
    return await response.json();
  } catch (error) {
    const message: string = 'Error fetching the users list';
    console.warn(message, error);
    return rejectWithValue(message);
  }
});
