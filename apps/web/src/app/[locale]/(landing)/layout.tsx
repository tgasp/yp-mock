import type { Metadata } from "next";
import { Header } from "@/src/components/layout/landing/header";
import { Footer } from "@/src/components/layout/landing/footer";

export const metadata: Metadata = {
  title: "Website",
  description: "Description",
  keywords: ["site", "web"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
