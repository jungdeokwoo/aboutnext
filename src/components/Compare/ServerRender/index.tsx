import React from "react";
import S from "./styles.module.scss";
import UserCard from "../UserCard";
import { UserInfoProps } from "@/types/Compare/type";

const ServerRender = ({
  userList,
  path,
}: {
  userList: UserInfoProps[];
  path: string;
}) => {
  return (
    <div className={S.ssrCnt}>
      {userList.map(user => (
        <UserCard
          key={user.id}
          userInfo={user}
          rendering="ssr"
          set="2"
          path={path}
        />
      ))}
    </div>
  );
};

export default ServerRender;
