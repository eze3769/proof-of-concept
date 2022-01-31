import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Grid,
  FilledInput,
  Modal,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { CropData } from '../CropArea/CropArea';
import request from '../../api/apiCalls';
import { saveData } from '../../features/checkoutData/checkoutDataSlice';
import { isLoading } from '../../features/responseWait/responseWaitSlice';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  mb: 1,
};
type Props = {
  workImage: string;
  cropData: CropData;
};
interface HttpDataResponse {
  data: {
    id: string;
    url: string;
  };
}

function CheckoutModal({ workImage, cropData }: Props) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveHandler = async () => {
    dispatch(isLoading());
    let response: HttpDataResponse;
    try {
      setOpen(false);
      const size = { width, height };
      response = await request(workImage as string, cropData, size);
      dispatch(saveData({ id: response.data.id, url: response.data.url }));
      navigate(`/checkout/${response.data.id}`);
    } catch (error) {
      // console.warn('error', error);
    }
  };
  return (
    <>
      <Button onClick={handleOpen}>Convert</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select the size you prefer:
          </Typography>
          <Grid
            container
            sx={{
              direction: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FilledInput
              id="component-width"
              defaultValue={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              type="number"
              sx={{ width: 80 }}
            />
            <Typography variant="h6" component="h5" sx={{ p: 2 }}>
              x
            </Typography>
            <FilledInput
              id="component-height"
              defaultValue={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              type="number"
              sx={{ width: 80 }}
            />
          </Grid>
          <Grid container sx={{ justifyContent: 'end', m: 3 }}>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={saveHandler}>
              Convert!
            </Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default CheckoutModal;
