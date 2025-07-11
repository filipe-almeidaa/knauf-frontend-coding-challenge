import { UserModel } from '@/models/user.model';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

type UserDetailsProps = {
  user: UserModel | null;
  onCloseClick: () => void;
};

export default function UserDetails({ user, onCloseClick }: UserDetailsProps) {
  return (
    <Card>
      <CardContent sx={{ height: '100%' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="div" justifyContent="space-between">
            {user?.name}
          </Typography>
          <IconButton color="secondary" onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {user?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user?.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
