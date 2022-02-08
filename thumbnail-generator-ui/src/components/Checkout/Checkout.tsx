import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Input,
  Typography,
} from '@mui/material';
import FileSaver from 'file-saver';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loaded } from '../../features/responseWait/responseWaitSlice';
import { RootState } from '../../app/store';

function Checkout() {
  const [copied, setCopied] = useState(false);
  const image = useSelector((state: RootState) => state.checkoutData);
  const isLoaded = useSelector((state: RootState) => state.responseWait.value);
  const dispatch = useDispatch();

  const downloadHandler = () => {
    FileSaver.saveAs(image.url, 'image.jpg');
  };
  useEffect(() => {
    if (image && isLoaded) {
      dispatch(loaded());
    }
  }, [isLoaded, image]);

  const clipboardHandler = () => {
    navigator.clipboard.writeText(image.url);
    setCopied(true);
  };

  return (
    <Container sx={{ minHeight: '100vh' }}>
      {image.url ? (
        <Box
          container
          component={Grid}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'column',
          }}
        >
          <Grid item sm={12}>
            <Typography variant="h2" component="h1">
              Ready!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" component="h2" align="center">
              Download your image
            </Typography>
          </Grid>
          <Grid container direction="column">
            <Grid item mx="auto" md={12}>
              <Box
                component="img"
                src={image.url}
                sx={{ px: 'auto', maxWidth: '30vw' }}
              />
            </Grid>
            <Grid item md={12} mx="auto">
              <Grid
                container
                sx={{ direction: 'row', justifyContent: 'space-between' }}
              >
                <Grid item sm={12} md={9}>
                  <Input value={image.url} sx={{ width: '40vw' }} />
                </Grid>
                <Grid item sm={12} md={3}>
                  <Button
                    variant="outlined"
                    onClick={clipboardHandler}
                    sx={{ px: 3 }}
                  >
                    Copy to clipboard
                  </Button>
                </Grid>
              </Grid>
              {copied && (
                <Alert severity="success" color="info">
                  Thumbnail URL was successfully copied to clipboard!
                </Alert>
              )}
            </Grid>
          </Grid>
          <Grid container sx={{ justifyContent: 'center' }}>
            <Button variant="contained" onClick={downloadHandler} sx={{ m: 3 }}>
              Download
            </Button>
          </Grid>
        </Box>
      ) : (
        <Box
          container
          component={Grid}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'column',
          }}
        >
          <Typography variant="h2" component="h1">
            Nothing to show
          </Typography>
          <Grid container sx={{ direction: 'row' }}>
            <Grid item sm={12} md={6}>
              <Typography component="h2" variant="h4">
                Go to generator to create a thumbnail.
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <Button component={Link} to="/generator" variant="contained">
                Let&apos;s go there!!!
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Checkout;
