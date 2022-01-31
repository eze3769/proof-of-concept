import React, { useCallback, useRef } from 'react';
import { Button, Grid } from '@mui/material';
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { saveImage } from '../../features/imageSelected/imageSelectedSlice';
import { cameraToggle } from '../../features/cameraStatus/cameraStatusSlice';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

function WebCamComponent() {
  const webcamRef = useRef<Webcam>(null);
  const dispatch = useDispatch();

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(
        saveImage({
          value: imageSrc,
        })
      );
      dispatch(cameraToggle({ value: false }));
    }
  }, [webcamRef]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Webcam
          audio={false}
          ref={webcamRef}
          width="450"
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={capture}
        >
          Capture photo
        </Button>
      </Grid>
    </Grid>
  );
}
export default WebCamComponent;
