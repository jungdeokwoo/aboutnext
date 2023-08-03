import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export default function Category() {
  return (
    <div className={style.box}>
      카테고리 <Link href="/about/modal">모달</Link>
    </div>
  );
}
