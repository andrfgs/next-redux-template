"use client";
import { NextResponse } from "next/server";
import { NextIntlClientProvider } from "next-intl";
import { useEffect } from "react";
import {
  DEFAULT_TIMEZONE,
  getLanguageMessages,
  stringToLanguage,
} from "@/i18n";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentLanguage } from "@/store/slices/languageSlice";

export default function LanguageProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const currentLanguage = useAppSelector(
    (store) => store.language.currentLanguage,
  );
  const dispatch = useAppDispatch();

  // Initialize the language on the store
  useEffect(() => {
    dispatch(setCurrentLanguage(stringToLanguage(locale)));
  }, [dispatch, locale]);

  // Persist language only when it changes
  useEffect(() => {
    if (!currentLanguage) return;
    const res = new NextResponse(null, { status: 204 });
    res.cookies.set("NEXT_LOCALE", currentLanguage, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: true,
    });
  }, [currentLanguage]);

  const messages = getLanguageMessages(locale);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={DEFAULT_TIMEZONE}
    >
      {children}
    </NextIntlClientProvider>
  );
}
