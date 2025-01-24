// src/store/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  currentTheme: 'dark' | 'light' | 'device';
};

// Get initial theme from localStorage or default to 'device'
const getInitialTheme = (): ThemeState['currentTheme'] => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as ThemeState['currentTheme'];
    return savedTheme || 'device';
  }
  return 'device';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState['currentTheme']>) => {
      state.currentTheme = action.payload;
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;