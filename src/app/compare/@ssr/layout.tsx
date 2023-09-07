import React from "react";
import S from "./styles.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={S.ssr}>
      <header>SSR 페이지</header>
      {children}
    </div>
  );
};

export default Layout;
