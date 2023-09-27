import React, { Suspense } from "react";
import S from "./styles.module.scss";
import ServerRender from "@/components/Compare/ServerRender";
import { UserInfoProps } from "@/types/Compare/type";
import LoadingCircle from "@/components/LoadingCircle";

const getUserList = async () => {
  const userList = await fetch("https://jsonplaceholder.typicode.com/users");
  const convertData: UserInfoProps[] = await userList.json();
  return convertData;
};

const SSR = async () => {
  const userList = await getUserList();

  return (
    <div className={S.ssr}>
      <header>SSR 페이지</header>
      <Suspense fallback={<LoadingCircle />}>
        <ServerRender userList={userList} path="ssr" />
      </Suspense>
    </div>
  );
};

export default SSR;
