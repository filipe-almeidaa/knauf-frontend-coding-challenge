'use client';
import useUsers from '@/lib/features/users/useUsers';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';

export default function UsersList() {
  const { getUsersList, usersList, usersLoading } = useUsers();

  useEffect(() => {
    getUsersList({});
  }, []);

  let tableContent = null;
  if (usersList && usersList.length > 0) {
    tableContent = usersList.map((row) => (
      <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.phone}</TableCell>
      </TableRow>
    ));
  } else if (usersLoading) {
    tableContent = (
      <TableRow>
        <TableCell colSpan={4}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, p: 3 }}
          >
            <CircularProgress />
          </Box>
        </TableCell>
      </TableRow>
    );
  } else if (usersList && usersList.length) {
    tableContent = <p>No results.</p>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableContent}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
