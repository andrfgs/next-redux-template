"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { setTheme, Theme } from "@/store/slices/themeSlice";

export default function ThemeSelector() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  function handleChange(theme: Theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    dispatch(setTheme(theme));
  }

  return (
    <fieldset>
      <legend>Theme color:</legend>
      {Object.values(Theme)
        .map(
          (theme) => theme.substring(0, 1).toUpperCase() + theme.substring(1),
        )
        .map((theme) => (
          <label key={theme}>
            <input
              type="radio"
              name="theme"
              value={theme}
              checked={currentTheme === theme.toLowerCase()}
              onChange={() => handleChange(theme.toLowerCase() as Theme)}
            />
            {theme}
          </label>
        ))}
    </fieldset>
  );
}
