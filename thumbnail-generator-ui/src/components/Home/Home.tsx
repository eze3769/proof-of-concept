import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import step1 from './step1.jpg';
import step2 from './step2.jpg';
import step3 from './step3.jpg';
import step4 from './step4.jpg';
import step5 from './step5.jpg';
import step6 from './step6.jpg';

const imgSx = { maxWidth: '100%', boxShadow: 3 };

function Home() {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Welcome to Thumbnail Generator UI
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ width: '100%', p: 5, justifyContent: 'center' }}
      >
        <Grid item lg={12}>
          <Typography variant="h5">
            <b>STEP 1:</b> Go to generator tab
          </Typography>
          <Box component="img" src={step1} sx={imgSx} />
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5">
            <b>STEP 2:</b> Signin or Signup
          </Typography>
          <Box component="img" src={step2} sx={imgSx} />
        </Grid>
        <Grid item lg={9}>
          <Typography variant="h5">
            <b>STEP 3:</b> Upload a picture or turn on the camera to take one
          </Typography>
          <Box component="img" src={step3} sx={imgSx} />
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h5">
            <b>STEP 4:</b> Zoom in or out on the image, select your preferred
            area and click the convert button
          </Typography>
          <Box component="img" src={step4} sx={imgSx} />
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h5">
            <b>STEP 5:</b> Select the thumbnail size you want
          </Typography>
          <Box component="img" src={step5} sx={imgSx} />
        </Grid>
        <Grid item lg={12}>
          <Typography variant="h5">
            <b>STEP 6:</b> Click to download the thumbnail or copy the URL to
            your clipboard
          </Typography>
          <Box component="img" src={step6} sx={imgSx} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
