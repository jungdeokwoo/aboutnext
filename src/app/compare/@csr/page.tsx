import React, { Suspense } from "react";
import S from "./styles.module.scss";
import ClientRender from "@/components/Compare/ClientRender";
import LoadingCircle from "@/components/LoadingCircle";

const page = () => {
  return (
    <div className={S.csr}>
      <header>CSR 페이지</header>
      <Suspense fallback={<LoadingCircle />}>
        <ClientRender path="compare" />
      </Suspense>
    </div>
  );
};

export default page;
