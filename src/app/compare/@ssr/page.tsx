import React from "react";
import S from "./styles.module.scss";
import ServerRender from "@/components/Compare/ServerRender";
import { UserInfoProps } from "@/types/Compare/type";

const getUserInfo = async () => {
  const userInfo = await fetch("https://jsonplaceholder.typicode.com/users");
  const convertData: UserInfoProps[] = await userInfo.json();
  return convertData;
};

const SSR = async () => {
  const userInfo = await getUserInfo();

  return (
    <div className={S.ssr}>
      <header>SSR 페이지</header>
      <ServerRender userInfo={userInfo} />
    </div>
  );
};

export default SSR;
