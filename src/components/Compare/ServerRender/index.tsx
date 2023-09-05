import React from "react";
import S from "./styles.module.scss";
import UserCard from "../UserCard";
import { UserInfoProps } from "@/types/Compare/type";

const ServerRender = ({ userInfo }: { userInfo: UserInfoProps[] }) => {
  return (
    <div className={S.ssrCnt}>
      {userInfo.map(user => (
        <UserCard key={user.id} userInfo={user} rendering="ssr" set="2" />
      ))}
    </div>
  );
};

export default ServerRender;
