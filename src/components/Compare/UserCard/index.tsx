import React from "react";
import Image from "next/image";
import S from "./styles.module.scss";
import { UserInfoProps } from "@/types/Compare/type";

const UserCard = ({
  userInfo,
  rendering,
  set,
}: {
  userInfo: UserInfoProps;
  rendering: string;
  set: string;
}) => {
  return (
    <div className={S.cardWrp}>
      <Image
        src={`https://robohash.org/${userInfo.id}?set=set${set}`}
        width={180}
        height={180}
        alt="userImage"
        priority={true}
      />
      <div className={S.detailInfo}>
        <p>{userInfo.name}</p>
        <p>{userInfo.username}</p>
        <p>{userInfo.email}</p>
        <p>rendering : {rendering}</p>
      </div>
    </div>
  );
};

export default UserCard;
