"use client";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === "en-US" ? "fr-FR" : "en-US";
    // Remove the current locale from pathname if it exists
    const newPathname =
      pathname.replace(`/${locale === "en-US" ? "en" : "fr"}`, "") || "/";
    router.push(`/${nextLocale === "en-US" ? "en" : "fr"}${newPathname}`);
  };

  return (
    <Button variant="ghost" className="w-[72px]" onClick={switchLocale}>
      {locale === "en-US" ? "FR" : "EN"}
    </Button>
  );
}
