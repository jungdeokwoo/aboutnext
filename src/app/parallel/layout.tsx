"use client";

import React, { useMemo } from "react";
import S from "./style.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout({
  item2,
  item,
  Modal,
  children,
}: {
  item2: React.ReactNode;
  item: React.ReactNode;
  Modal: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathValue = useMemo(() => {
    return localStorage.getItem("path");
  }, []);

  return (
    <div className={S.prlWrapper}>
      <div className={S.header}>parallel 폴더 내 layout.tsx 영역</div>
      <section className={S.section}>
        {!pathValue && children}
        {pathValue === "item" && item}
        {pathValue === "item2" && item2}
        {pathValue === "both" && item}
        {pathValue === "both" && item2}
        {Modal}
      </section>
    </div>
  );
}
