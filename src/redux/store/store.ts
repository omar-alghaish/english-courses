// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import builderReducer from "../features/builder/builderSlice"
export const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
