import React from 'react';
import { Typography, Box } from '@mui/material';

function NotFound() {
  return (
    <Box>
      <Typography variant="h2" component="h1">
        404 - Not found
      </Typography>
      <Typography variant="h3" component="h2">
        Check the URL you are looking for.
      </Typography>
    </Box>
  );
}

export default NotFound;
