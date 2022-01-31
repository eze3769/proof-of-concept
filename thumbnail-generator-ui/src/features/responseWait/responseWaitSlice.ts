import { createSlice } from '@reduxjs/toolkit';

export interface responseWait {
  value: boolean;
}

const initialState: responseWait = {
  value: false,
};

export const responseWaitSlice = createSlice({
  name: 'responseWait',
  initialState,
  reducers: {
    isLoading: (state) => {
      return {
        ...state,
        value: true,
      };
    },
    loaded: (state) => {
      return {
        ...state,
        value: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { isLoading, loaded } = responseWaitSlice.actions;

export default responseWaitSlice.reducer;
