"use client";

import React, { useEffect, useState } from "react";
import UserCard from "@/components/Compare/UserCard";
import { UserInfoProps } from "@/types/Compare/type";

const UserInfoDtlCSR = ({ params: { id } }: { params: { id: string } }) => {
  const [userInfo, setUserInfo] = useState<UserInfoProps | null>(null);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData: UserInfoProps = await response.json();
      setUserInfo(userData);
    })();
  }, [id]);

  return (
    userInfo && (
      <UserCard userInfo={userInfo} rendering="CSR" set="1" path="csr" />
    )
  );
};

export default UserInfoDtlCSR;
