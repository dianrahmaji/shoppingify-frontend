import "./globals.css";
import { Quicksand } from "next/font/google";

import Navigation from "~/components/navigation";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
