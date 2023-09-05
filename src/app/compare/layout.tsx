import React from "react";
import S from "./style.module.scss";

export default function layout({
  children,
  csr,
  ssr,
}: {
  children: React.ReactNode;
  ssr: React.ReactNode;
  csr: React.ReactNode;
}) {
  return (
    <div className={S.compareWrp}>
      <header className={S.header}>compare 헤더 /app/compare</header>
      <section>
        {csr}
        {ssr}
      </section>
    </div>
  );
}
