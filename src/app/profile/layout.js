"use client";
import LoginRegister from "@app/login/page";
import ClientDashboardNav from "@components/navbar/ClientDashboardNav";
import "@styles/globals.css";
import { useSelector } from "react-redux";

export default function ProfileLayout({ children }) {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  if (!auth.authenticate) {
    return <LoginRegister />;
  } else {
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
}
