import en from "@/messages/en.json";

export enum Language {
  English = "en",
  French = "fr",
}

export type FlagProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

const languageMap: {
  [key: string]: {
    language: Language;
    flag?: React.ComponentType;
    name: string;
    messages: any;
  };
} = {
  en: {
    name: "English",
    language: Language.English,
    //flag: UKFlag,
    messages: en,
  },
};

export const SUPPORTED_LANGUAGES: Language[] = Object.keys(languageMap)
  .sort((a, b) => a.localeCompare(b))
  .reverse() as Language[];
export const DEFAULT_LANGUAGE: Language = Language.English;
export const DEFAULT_TIMEZONE = "Europe/Brussels";

export function isLocaleSupported(locale: string): locale is Language {
  return SUPPORTED_LANGUAGES.includes(locale as Language);
}

export function getLanguageName(locale: string): string {
  return languageMap?.[locale]?.name || "Unknown";
}

export function stringToLanguage(locale: string): Language {
  return (locale as Language) || DEFAULT_LANGUAGE;
}

/*export function getFlagIcon(locale: string): React.ComponentType<FlagProps> {
  return languageMap?.[locale]?.flag || undefined;
}*/

export function getLanguageMessages(locale: string) {
  return languageMap?.[locale]?.messages || en;
}
