import React from "react";
import style from "./layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={style.layout}>Post 레이아웃</div>
      {children}
    </>
  );
}
