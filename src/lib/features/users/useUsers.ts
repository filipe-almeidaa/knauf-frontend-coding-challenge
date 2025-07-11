import { getUsersListAction } from '@/lib/features/users/usersActions';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { UsersFilterModel } from '@/models/user.model';
import { useCallback } from 'react';

const useUsers = () => {
  const dispatch = useAppDispatch();

  const getUsersList = useCallback(
    (filter: UsersFilterModel) => dispatch(getUsersListAction(filter)),
    [dispatch],
  );

  const usersList = useAppSelector((state) => state.users.usersList);
  const usersLoading = useAppSelector((state) => state.users.usersLoading);

  return {
    getUsersList,
    usersList,
    usersLoading,
  };
};

export default useUsers;
