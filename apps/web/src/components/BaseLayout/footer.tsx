import LocaleSwitcher from "@/src/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              {t("company.title")}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("company.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("company.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              {t("legal.title")}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("legal.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("legal.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              {t("social.title")}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("social.twitter")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("social.github")}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {t("social.linkedin")}
                </a>
              </li>
            </ul>
          </div>

          {/* Language Section */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              {t("language")}
            </h3>
            <div className="mt-6">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t pt-8">
        <p className="text-center text-xs leading-5 text-muted-foreground">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
