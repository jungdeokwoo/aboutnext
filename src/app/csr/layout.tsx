import React, { Suspense } from "react";
import S from "./styles.module.scss";
import LoadingCircle from "@/components/LoadingCircle";

const layoutCSR = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={S.csr}>
      <header>CSR 페이지</header>
      <Suspense fallback={<LoadingCircle />}>{children}</Suspense>
    </div>
  );
};

export default layoutCSR;
