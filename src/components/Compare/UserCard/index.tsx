import React from "react";
import Image from "next/image";
import S from "./styles.module.scss";
import { MongoUserInfoProps, UserInfoProps } from "@/types/Compare/type";
import Link from "next/link";

const UserCard = ({
  userInfo,
  rendering,
  set,
  path,
}: {
  userInfo: UserInfoProps | MongoUserInfoProps;
  rendering: string;
  set: string;
  path: string;
}) => {
  return (
    <Link href={`/${path}/${userInfo.id}`} className={S.cardWrp}>
      <Image
        src={`https://robohash.org/${userInfo.id}?set=set${set}`}
        width={180}
        height={180}
        alt="userImage"
        priority={true}
      />
      <div className={S.detailInfo}>
        <span>{userInfo.name}</span>
        <span>{userInfo.username}</span>
        <span>{userInfo.email}</span>
        <span>rendering : {rendering}</span>
        <span>NO : {userInfo.id}</span>
      </div>
    </Link>
  );
};

export default UserCard;
