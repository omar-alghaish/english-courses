// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import builderReducer from "../features/builder/builderSlice";
import themeReducer from "../features/theme/themeSlice";
export const store = configureStore({
  reducer: {
    builder: builderReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
