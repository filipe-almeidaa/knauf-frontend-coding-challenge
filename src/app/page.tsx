'use client';
import SearchInput from '@/app/components/SearchInput';
import UserDetails from '@/app/components/UserDetails';
import UsersTable from '@/app/components/UsersTable';
import useUsers from '@/lib/features/users/useUsers';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import debounce from '@mui/utils/debounce';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect } from 'react';

export default function Home() {
  const {
    getUsersList,
    selectUser,
    clearSelectedUser,
    usersList,
    usersLoading,
    usersError,
    selectedUser,
  } = useUsers();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nameSearchParam = searchParams.get('name') ?? '';

  const setSearchParamsDebounced = useCallback(
    debounce((params: URLSearchParams) => {
      if (params.get('name')?.length) {
        router.replace(`?${params.toString()}`);
      } else {
        router.replace('/');
      }
    }, 300),
    [router],
  );

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.trim();
      const searchParams: URLSearchParams = new URLSearchParams({ name: inputValue });

      setSearchParamsDebounced(searchParams);
    },
    [setSearchParamsDebounced],
  );

  useEffect(() => {
    getUsersList({
      name: nameSearchParam,
    });
  }, [nameSearchParam]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Container maxWidth="md">
          <Typography variant="h2" align="center" marginBottom="1rem">
            Users List
          </Typography>
          <Paper>
            <Stack direction="column" spacing={4} padding={4}>
              <SearchInput
                defaultValue={nameSearchParam}
                onChangeHandler={handleSearchInputChange}
              />
              <UsersTable
                list={usersList}
                isLoading={usersLoading}
                error={usersError}
                onRowClick={selectUser}
              />
              {selectedUser ? (
                <UserDetails user={selectedUser} onCloseClick={clearSelectedUser} />
              ) : null}
            </Stack>
          </Paper>
        </Container>
      </main>
    </div>
  );
}
