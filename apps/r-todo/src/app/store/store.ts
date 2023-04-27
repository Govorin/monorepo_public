import { taskApi } from '@api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
