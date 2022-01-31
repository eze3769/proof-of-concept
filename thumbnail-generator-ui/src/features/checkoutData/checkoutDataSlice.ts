import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface checkoutData {
  id: string;
  url: string;
}

const initialState: checkoutData = {
  id: '',
  url: '',
};

export const checkoutDataSlice = createSlice({
  name: 'imageSelected',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<checkoutData>) => {
      return {
        ...state,
        id: action.payload.id,
        url: action.payload.url,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveData } = checkoutDataSlice.actions;

export default checkoutDataSlice.reducer;
