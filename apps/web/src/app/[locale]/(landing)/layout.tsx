import "@/app/globals.css";

import { Header } from "@/components/LandingLayout/header";
import { Footer } from "@/components/LandingLayout/footer";

type Props = {
  children: React.ReactNode;
  locale: string;
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
