// src/store/selectors.ts
import { RootState } from "@/redux/store/store";

export const selectCurrentTheme = (state: RootState) => {
  if (state.theme.currentTheme === 'device') {
    // Check system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Fallback
  }
  return state.theme.currentTheme;
};