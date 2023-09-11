"use client";

import React from "react";
import S from "./style.module.scss";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const clickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={S.modalWrap}>
      <div className={S.background} onClick={event => clickHandler(event)} />
      <div className={S.modalCnt}>{children}</div>
    </div>
  );
};

export default Modal;
