import React from "react";
import S from "./style.module.scss";
import Link from "next/link";

const Parallel = () => {
  return (
    <div className={S.box}>
      <p>parallel 폴더 내 page.tsx</p>
      <p className={S.strong}>
        localStorage 의 path 값이 없을때 지금 화면이 렌더링 됩니다.
      </p>
      <Link href={"/parallel/modal"}>여기를 누르면 모달창이 뜹니다</Link>
    </div>
  );
};

export default Parallel;
