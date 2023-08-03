"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import style from "./style.module.scss";

export default function Layout({
  category,
  item,
  exception,
}: {
  category: React.ReactNode;
  item: React.ReactNode;
  exception: React.ReactNode;
}) {
  console.log("hi");
  const segments = useSelectedLayoutSegment();
  console.log(segments, "<<");
  return (
    <>
      <div className={style.header}>About 헤더 {segments}</div>
      <section className={style.section}>
        {category}
        {item}
        {exception}
      </section>
    </>
  );
}
