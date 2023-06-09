import "./globals.css";
import { Quicksand } from "next/font/google";

import Navigation from "~/components/navigation";
import ListDrawer from "~/components/list-drawer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: "Shoppingify",
  description: "Shopping List Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} bg-gray-100`}>
        <Navigation />
        {children}
        <ListDrawer />
      </body>
    </html>
  );
}
