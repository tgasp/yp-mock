import "@/app/globals.css";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default async function AuthLayout({ children }: Props) {
  return (
    <>
      <main className="flex-1">{children}</main>
    </>
  );
}
