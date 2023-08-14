import React from "react";
import style from "./style.module.scss";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res, "<<res");

  return res.json();
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={style.header}>Dashboard 헤더</header>
      {children}
    </>
  );
}
