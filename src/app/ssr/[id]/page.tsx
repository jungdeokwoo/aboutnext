import UserCard from "@/components/Compare/UserCard";
import { UserInfoProps } from "@/types/Compare/type";
import React from "react";

export async function generateStaticParams() {
  const userList = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const lists: UserInfoProps[] = await userList.json();
  console.log(
    lists.map((user: UserInfoProps) => ({ id: String(user.id) })),
    "??"
  );
  return lists.map((user: UserInfoProps) => ({ id: String(user.id) }));
}

const getUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const userData = await response.json();
  return userData;
};

const UserInfoDtlSSR = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const userData = await getUser(id);

  return <UserCard userInfo={userData} rendering="SSR" set="2" path="ssr" />;
};

export default UserInfoDtlSSR;
