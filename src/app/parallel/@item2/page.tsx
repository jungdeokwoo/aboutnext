import React from "react";
import S from "./style.module.scss";
import Link from "next/link";

export default function Category() {
  return (
    <div className={S.box}>
      <p>parallel 폴더 내 @item2 폴더 내 page.tsx</p>
      <p className={S.strong}>
        localStorage에 path 의 값이 item2 일때 현재 페이지를 렌더링 합니다.
      </p>
      <Link href={"/parallel/modal"}>여기를 누르면 모달창이 뜹니다</Link>
    </div>
  );
}
