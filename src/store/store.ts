import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "@/store/slices/languageSlice";
import themeReducer from "@/store/slices/themeSlice";

/**
 * Redux store configuration
 */

export const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
