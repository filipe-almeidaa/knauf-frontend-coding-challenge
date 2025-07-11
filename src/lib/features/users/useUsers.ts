import { getUsersListAction } from '@/lib/features/users/usersActions';
import { clearSelectedUserAction, selectUserAction } from '@/lib/features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { UserModel, UsersFilterModel } from '@/models/user.model';
import { useCallback } from 'react';

const useUsers = () => {
  const dispatch = useAppDispatch();

  const getUsersList = useCallback(
    (filter: UsersFilterModel) => dispatch(getUsersListAction(filter)),
    [dispatch],
  );

  const selectUser = useCallback((user: UserModel) => dispatch(selectUserAction(user)), [dispatch]);

  const clearSelectedUser = useCallback(() => dispatch(clearSelectedUserAction()), [dispatch]);

  const usersList = useAppSelector((state) => state.users.usersList);
  const usersLoading = useAppSelector((state) => state.users.usersLoading);
  const usersError = useAppSelector((state) => state.users.usersError);
  const selectedUser = useAppSelector((state) => state.users.selectedUser);

  return {
    getUsersList,
    selectUser,
    clearSelectedUser,
    usersList,
    usersLoading,
    usersError,
    selectedUser,
  };
};

export default useUsers;
