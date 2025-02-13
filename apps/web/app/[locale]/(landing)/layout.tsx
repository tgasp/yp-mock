import type { Metadata } from "next";
import { Header } from "@/components/layout/landing/header";
import { Footer } from "@/components/layout/landing/footer";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Website",
  description: "Description",
  keywords: ["site", "web"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
