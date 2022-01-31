import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Grid } from '@mui/material';
import LogoutButton from '../../hoc/Aut0/LogoutButton';

function UserCard({ user }: { user: any }) {
  return (
    <Box sx={{ mx: 'auto', maxWidth: '300px', boxShadow: 3 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, mb: 2 }}
            color="text.secondary"
            gutterBottom
          >
            User&lsquo;s information
          </Typography>
          <Avatar
            alt={user.name}
            src={user.picture}
            sx={{ width: 56, height: 56, mx: 'auto', my: 2 }}
          />
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {user.email}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container sx={{ justifyContent: 'center' }}>
            <LogoutButton />
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}

export default UserCard;
