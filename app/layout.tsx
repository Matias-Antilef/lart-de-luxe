import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "../redux/ReduxProvider";

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
          <div className="pt-[55px] overflow-hidden  min-h-screen min-w-screen ">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
