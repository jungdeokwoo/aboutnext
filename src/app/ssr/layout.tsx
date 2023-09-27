import React, { Suspense } from "react";
import S from "./styles.module.scss";
import LoadingCircle from "@/components/LoadingCircle";

const layoutSSR = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={S.ssr}>
      <header>SSR 페이지</header>
      <Suspense fallback={<LoadingCircle />}>{children}</Suspense>
    </div>
  );
};

export default layoutSSR;
