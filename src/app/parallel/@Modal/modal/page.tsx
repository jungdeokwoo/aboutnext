"use client";

import React from "react";
import style from "./style.module.scss";
import { usePathname, useRouter } from "next/navigation";

export default function ModalRouting() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={style.background}>
      <div className={style.back} onClick={() => router.back()} />
      <div className={style.modal}>
        <p>지금 떠있는 모달의 경로는 : </p>
        <p>{path}</p>
        <p>모달창의 바깥부분을 클릭하면</p>
        <p>모달창이 사라집니다.</p>
      </div>
    </div>
  );
}
