import React from "react";
import S from "./styles.module.scss";

const SSR = () => {
  return (
    <div className={S.ssr}>
      <header>SSR 페이지</header>
    </div>
  );
};

export default SSR;
