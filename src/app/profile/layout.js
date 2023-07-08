"use client";
import ClientDashboardNav from "@components/navbar/ClientDashboardNav";
import "@styles/globals.css";

export default function ProfileLayout({ children }) {
  return (
    <section className="max-w-[1920px] w-full mx-auto flex justify-between gap-10 items-start p-6">
      {/* w-[337px] */}
      <div className="lg:w-1/4 sm:w-0 lg:block sm:hidden">
        <ClientDashboardNav />
      </div>

      {/* NEVIGATION PAGE LOADER DIV */}
      <div className="lg:w-3/4 sm:w-full">{children}</div>
    </section>
  );
}
