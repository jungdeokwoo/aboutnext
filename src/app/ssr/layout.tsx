import React from "react";
import S from "./styles.module.scss";

// const getUserList = async () => {
//   const userList = await fetch("http://localhost:3000/api/mongo");
//   return userList;
// };

const layoutSSR = async ({ children }: { children: React.ReactNode }) => {
  // const res = await getUserList();
  // const result = await res.json();

  return (
    <div className={S.ssr}>
      <header>SSR 페이지</header>
      {children}
    </div>
  );
};

export default layoutSSR;
