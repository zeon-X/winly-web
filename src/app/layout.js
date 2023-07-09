"use client";
import Drawer from "@components/Drawer";
import Nossr from "@components/nossr";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Suspense } from "react";
import LoadingLandingPage from "./loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Nossr>
          <Provider store={store}>
            <Suspense fallback={<LoadingLandingPage />}>
              <Drawer>{children}</Drawer>
            </Suspense>
          </Provider>
        </Nossr>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
