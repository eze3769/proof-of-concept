import { configureStore } from '@reduxjs/toolkit';
import imageSelectedReducer from '../features/imageSelected/imageSelectedSlice';
import cameraStatusReducer from '../features/cameraStatus/cameraStatusSlice';
import responseWaitReducer from '../features/responseWait/responseWaitSlice';
import checkoutDataReducer from '../features/checkoutData/checkoutDataSlice';

export const store = configureStore({
  reducer: {
    imageSelected: imageSelectedReducer,
    cameraStatus: cameraStatusReducer,
    responseWait: responseWaitReducer,
    checkoutData: checkoutDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
