"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { setTheme, Theme } from "@/store/slices/themeSlice";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || Theme.System;

    const theme: Theme = Object.values(Theme).includes(
      storedTheme.toLowerCase() as Theme,
    )
      ? (storedTheme.toLowerCase() as Theme)
      : Theme.System;

    document.documentElement.setAttribute("data-theme", theme);
    dispatch(setTheme(theme));
  }, [dispatch]);

  return <>{children}</>;
}
