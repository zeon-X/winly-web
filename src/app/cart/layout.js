"use client";
import React, { Suspense } from "react";
import LoadingCart from "./loading";

const layout = ({ children }) => {
  return (
    <Suspense fallback={<LoadingCart />}>
      <section className="max-w-[1920px] w-full mx-auto p-6">
        {children}
      </section>
    </Suspense>
  );
};

export default layout;
