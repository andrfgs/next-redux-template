import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export enum Theme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

interface ThemeState {
  currentTheme: Theme;
}

const initialState: ThemeState = {
  currentTheme: Theme.System,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
