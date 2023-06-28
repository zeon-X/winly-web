"use client";
import Drawer from "@components/Drawer";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Provider store={store}>
          <Drawer>{children}</Drawer>
        </Provider>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
