import React from "react";
import S from "./styles.module.scss";
import ClientRender from "@/components/Compare/ClientRender";

const page = () => {
  return (
    <div className={S.csr}>
      <header>CSR 페이지</header>
      <ClientRender path="compare" />
    </div>
  );
};

export default page;
