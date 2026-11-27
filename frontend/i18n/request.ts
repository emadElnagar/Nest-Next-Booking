import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  const savedLocale = cookieStore.get("NEXT_LOCALE")?.value;

  const acceptLanguage = (await headers()).get("accept-language");

  const locale =
    savedLocale === "ar" || savedLocale === "en"
      ? savedLocale
      : acceptLanguage?.toLowerCase().startsWith("ar")
        ? "ar"
        : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
