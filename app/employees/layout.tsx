import SideNav from "@/components/side-nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-screen">
      <SideNav />
      <section className="w-4/5 overflow-auto p-8">{children}</section>
    </main>
  );
};

export default Layout;
