"use client";
import Drawer from "@components/Drawer";
import "@styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Drawer>{children}</Drawer>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
