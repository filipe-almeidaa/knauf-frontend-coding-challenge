import UsersList from '@/app/components/UsersList';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Container maxWidth="md">
          <Typography variant="h2" align="center" marginBottom="1rem">
            Users List
          </Typography>
          <Paper>
            <Stack direction="column" spacing={4} padding={4}>
              <p className="p-5">Search Input</p>
              <UsersList />
            </Stack>
          </Paper>
        </Container>
      </main>
    </div>
  );
}
