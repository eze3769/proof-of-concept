import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface cameraStatus {
  value: boolean;
}

const initialState: cameraStatus = {
  value: false,
};

export const cameraStatusSlice = createSlice({
  name: 'cameraStatus',
  initialState,
  reducers: {
    cameraToggle: (state, action: PayloadAction<cameraStatus>) => {
      return {
        ...state,
        value: action.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { cameraToggle } = cameraStatusSlice.actions;

export default cameraStatusSlice.reducer;
