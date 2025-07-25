import { UserModel } from '@/models/user.model';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { PropsWithChildren } from 'react';

type UsersTableProps = {
  list: UserModel[] | null;
  isLoading: boolean;
  error: string | null;
  onRowClick: (user: UserModel) => void;
};

function CenteredTableCell({ children }: PropsWithChildren) {
  return (
    <TableRow>
      <TableCell colSpan={4}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, p: 3 }}>
          {children}
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default function UsersTable({ list, isLoading, error, onRowClick }: UsersTableProps) {
  let tableContent = null;
  if (list && list.length > 0) {
    tableContent = list.map((rowUser) => (
      <TableRow
        key={rowUser.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        onClick={() => onRowClick(rowUser)}
        className="cursor-pointer"
      >
        <TableCell component="th" scope="row">
          {rowUser.id}
        </TableCell>
        <TableCell>{rowUser.name}</TableCell>
        <TableCell>{rowUser.email}</TableCell>
        <TableCell>{rowUser.phone}</TableCell>
      </TableRow>
    ));
  } else if (list?.length === 0) {
    tableContent = (
      <CenteredTableCell>
        <p>No results.</p>
      </CenteredTableCell>
    );
  } else if (isLoading) {
    tableContent = (
      <CenteredTableCell>
        <CircularProgress />
      </CenteredTableCell>
    );
  } else if (error) {
    tableContent = (
      <CenteredTableCell>
        <p>{error}</p>
      </CenteredTableCell>
    );
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
