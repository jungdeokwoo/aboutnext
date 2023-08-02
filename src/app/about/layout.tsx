import React from "react";
import style from "./style.module.scss";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={style.header}>About 헤더</header>
      {children}
    </>
  );
}
