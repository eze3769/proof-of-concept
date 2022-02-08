import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Size } from 'react-easy-crop/types';
import request from '../../api/apiCalls';
import { CropData } from '../../components/CropArea/CropArea';

export interface checkoutData {
  id: string;
  url: string;
  redirect: boolean;
}
interface HttpDataResponse {
  data: {
    id: string;
    url: string;
  };
}
interface Data {
  workImage: string;
  cropData: CropData;
  size: Size;
}

const initialState: checkoutData = {
  id: '',
  url: '',
  redirect: false,
};

export const fetchData = createAsyncThunk(
  'checkoutData/fetchData',
  async (data: Data) => {
    const response: HttpDataResponse = await request(
      data.workImage as string,
      data.cropData,
      data.size
    );
    return response.data;
  }
);

export const checkoutDataSlice = createSlice({
  name: 'checkoutData',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<checkoutData>) => {
      return {
        ...state,
        id: action.payload.id,
        url: action.payload.url,
      };
    },
    stopRedirect: (state) => {
      return {
        ...state,
        redirect: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        url: action.payload.url,
        redirect: true,
      };
    });
  },
});

// Action creators are generated for each case reducer function
export const { saveData, stopRedirect } = checkoutDataSlice.actions;

export default checkoutDataSlice.reducer;
