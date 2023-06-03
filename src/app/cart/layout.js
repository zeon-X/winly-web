import React from "react";

const layout = ({ children }) => {
  return (
    <section className="max-w-[1440px] w-full mx-auto p-6">{children}</section>
  );
};

export default layout;
