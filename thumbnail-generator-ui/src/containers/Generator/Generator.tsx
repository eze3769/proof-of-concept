import React, { useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Switch,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WebCamComponent from '../../components/WebCamComponent.tsx/WebCamComponent';
import FileUploaderContainer from '../FileUploaderContainer/FileUploaderContainer';
import { RootState } from '../../app/store';
import { cameraToggle } from '../../features/cameraStatus/cameraStatusSlice';
import CropArea from '../../components/CropArea/CropArea';

function Generator() {
  const workImage = useSelector((state: RootState) => state.imageSelected);
  const cameraStatus = useSelector(
    (state: RootState) => state.cameraStatus.value
  );
  const isLoading = useSelector((state: RootState) => state.responseWait);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state: RootState) => state.checkoutData.id);
  const handleCamera = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(cameraToggle({ value: event.target.checked }));
  };
  const redirect = useSelector(
    (state: RootState) => state.checkoutData.redirect
  );

  useEffect(() => {
    if (redirect) {
      navigate(`/checkout/${id}`);
    }
  }, [redirect]);

  return (
    <Container sx={{ minHeight: '100vh' }}>
      {isLoading.value ? (
        <Grid
          container
          sx={{ justifyContent: 'center', alignItems: 'center', mt: 30 }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Container>
          <Typography variant="h2" component="h1">
            Let&apos;s create a thumbnail!
          </Typography>
          <Grid
            container
            rowSpacing={1}
            justifyContent="center"
            alignItems="start"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Grid container>
                <Grid item xs={12}>
                  <span>Turn on camera</span>
                  <Switch
                    onChange={handleCamera}
                    checked={cameraStatus}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </Grid>
                <Grid item sx={{ mt: 5, mx: 'auto' }}>
                  {cameraStatus ? (
                    <WebCamComponent />
                  ) : (
                    <FileUploaderContainer />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} mt={9} alignItems="center">
              {workImage.value ? (
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <CropArea />
                </Box>
              ) : (
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Typography variant="h5">No image to show</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      )}
    </Container>
  );
}

export default Generator;
