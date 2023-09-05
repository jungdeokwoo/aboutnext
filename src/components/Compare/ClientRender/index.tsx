"use client";

import React, { useEffect, useState } from "react";
import S from "./styles.module.scss";
import UserCard from "../UserCard";
import { UserInfoProps } from "@/types/Compare/type";

const ClientRender = () => {
  const [userInfo, setUserInfo] = useState<UserInfoProps[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const convertData = await response.json();
      setUserInfo(convertData);
    })();
  }, []);

  return (
    <div className={S.csrCnt}>
      {userInfo.map((user: UserInfoProps) => (
        <UserCard key={user.id} userInfo={user} rendering="csr" set="1" />
      ))}
    </div>
  );
};

export default ClientRender;
