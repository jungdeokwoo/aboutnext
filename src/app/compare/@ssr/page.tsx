import React from "react";
import ServerRender from "@/components/Compare/ServerRender";
import { UserInfoProps } from "@/types/Compare/type";

const getUserList = async () => {
  const userList = await fetch("https://jsonplaceholder.typicode.com/users");
  const convertData: UserInfoProps[] = await userList.json();
  return convertData;
};

const SSR = async () => {
  const userList = await getUserList();

  return <ServerRender userList={userList} path="compare" />;
};

export default SSR;
