import Link from "next/link";
import React from "react";
import S from "./MainLayout.module.scss";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={S.header}>
        <Link href="/">Main</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
      </header>
      {children}
    </>
  );
};
export default MainLayout;
