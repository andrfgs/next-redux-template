import createMiddleware from "next-intl/middleware";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./i18n/index";

export default createMiddleware({
  locales: SUPPORTED_LANGUAGES,
  defaultLocale: DEFAULT_LANGUAGE,
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    // Match all pathnames except for:
    // - /api routes
    // - /_next (Next.js internals)
    // - /.*\\..*  (static files)
    "/((?!api|_next|.*\\..*).*)",
  ],
};
