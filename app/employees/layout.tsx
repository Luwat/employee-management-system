import SideNav from "@/components/side-nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-screen">
      <SideNav />
      {children}
    </main>
  );
};

export default Layout;
