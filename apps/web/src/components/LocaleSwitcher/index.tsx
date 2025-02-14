import { useLocale, useTranslations } from "next-intl";
import { localesLabels, routing } from "@/src/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {localesLabels[cur]}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
