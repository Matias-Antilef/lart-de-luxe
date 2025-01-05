import Navegation from "@/components/navegation/navegation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navegation />
      <div>{children}</div>
    </>
  );
}
