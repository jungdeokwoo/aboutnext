"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import style from "./style.module.scss";

export default function Modal() {
  const router = useRouter();
  const path = usePathname();
  const params = useParams();
  console.log(params, "<<?");

  return (
    <div className={style.background}>
      <div className={style.back} onClick={() => router.back()} />
      <div className={style.modal}>{path}</div>
    </div>
  );
}
