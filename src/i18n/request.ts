import { getRequestConfig } from "next-intl/server";
import {
  DEFAULT_LANGUAGE,
  DEFAULT_TIMEZONE,
  SUPPORTED_LANGUAGES,
} from "./index";

// Used by getTranslations / getTranslator in server components
export default getRequestConfig(async ({ requestLocale }) => {
  const requestLocaleValue = await requestLocale;
  const finalLocale =
    SUPPORTED_LANGUAGES.includes(requestLocaleValue as any) &&
    requestLocaleValue
      ? requestLocaleValue
      : DEFAULT_LANGUAGE;

  return {
    locale: finalLocale,
    timeZone: DEFAULT_TIMEZONE,
    messages: (await import(`../messages/${finalLocale}.json`)).default,
  };
});
