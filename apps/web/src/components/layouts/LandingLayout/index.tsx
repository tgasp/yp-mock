
import { ReactNode } from "react";
import { Footer } from "@/components/layouts/LandingLayout/footer";
import { Header } from "@/components/layouts/LandingLayout/header";
import "@/app/globals.css";

type Props = {
  children: ReactNode;
};

export default async function LandingLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
