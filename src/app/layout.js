"use client";
import Drawer from "@components/Drawer";
import "@styles/globals.css";

export const metadata = {
  title: "Winly",
  description: "Ecommerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
