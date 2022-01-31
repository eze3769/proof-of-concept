import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface imageSelected {
  value: string | null;
}

const initialState: imageSelected = {
  value: '',
};

export const imageSelectedSlice = createSlice({
  name: 'imageSelected',
  initialState,
  reducers: {
    saveImage: (state, action: PayloadAction<imageSelected>) => {
      return {
        ...state,
        value: action.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveImage } = imageSelectedSlice.actions;

export default imageSelectedSlice.reducer;
