import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import Navegation from "@/components/navegation/navegation";

export const metadata: Metadata = {
  title: "L'art De Luxe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <ReduxProvider>
          <Navegation />
          <div className="overflow-hidden min-h-full">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
