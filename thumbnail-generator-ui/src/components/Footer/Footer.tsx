import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Grid
            container
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item sm={12} md={6}>
              <Typography variant="body1" color="inherit" align="center">
                &copy; 2022 Galardi, Ezequiel
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item>
                  <Typography
                    component="a"
                    href="https://www.linkedin.com/in/ezequielgalardi/"
                    color="white"
                  >
                    <LinkedInIcon />
                  </Typography>
                </Grid>
                <Grid item mx={3}>
                  <Typography
                    component="a"
                    href="https://github.com/eze3769"
                    color="white"
                  >
                    <GitHubIcon />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
