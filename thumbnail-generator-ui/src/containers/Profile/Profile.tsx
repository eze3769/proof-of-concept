import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress, Container } from '@mui/material';
import React from 'react';
import UserCard from '../../components/UserCard/UserCard';

function Profile() {
  const { user } = useAuth0();
  return (
    <Container sx={{ minHeight: '100vh', mt: 8 }}>
      {user ? <UserCard user={user} /> : <CircularProgress />}
    </Container>
  );
}

export default Profile;
