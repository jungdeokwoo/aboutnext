"use client";

import React, { useState } from "react";
import S from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ImgCard = ({ item }: { item: { url: string; _id: string } }) => {
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);

  const dimHandler = () => {
    setClicked(prev => !prev);
  };

  const openNewWindow = () => {
    window.open(`${process.env.NEXT_PUBLIC_MY_S3_URL}/${item.url}`);
  };

  const deleteHandler = async () => {
    try {
      const response = await fetch("/api/board/img", {
        method: "DELETE",
        body: item.url,
      });
      alert("이미지 삭제성공");
    } catch {
      alert("이미지 삭제실패");
    } finally {
      router.refresh();
    }
  };

  return (
    <div className={S.imgWrapper}>
      <div
        className={`${S.imgItem} ${clicked && S.filter}`}
        onClick={dimHandler}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_MY_S3_URL}/${item.url}`}
          width={300}
          height={400}
          alt="업로드이미지"
          fill={false}
        />
        {clicked && <div className={S.dim} />}
      </div>
      {clicked && (
        <div className={S.dimCont}>
          <button onClick={openNewWindow}>이미지 크게보기</button>
          <button onClick={deleteHandler}>이미지 삭제하기</button>
        </div>
      )}
    </div>
  );
};

export default ImgCard;
