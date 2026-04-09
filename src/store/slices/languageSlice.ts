import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_LANGUAGE, type Language } from "@/i18n";

interface LanguageState {
  currentLanguage: Language | undefined;
  isLanguageMenuOpen: boolean;
}

const initialState: LanguageState = {
  currentLanguage: undefined,
  isLanguageMenuOpen: false,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    },
    toggleLanguageMenu: (state) => {
      state.isLanguageMenuOpen = !state.isLanguageMenuOpen;
    },
    setLanguageMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isLanguageMenuOpen = action.payload;
    },
  },
});

export const { setCurrentLanguage, toggleLanguageMenu, setLanguageMenuOpen } =
  languageSlice.actions;
export default languageSlice.reducer;
