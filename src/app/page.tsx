"use client";

import React from "react";
import S from "./page.module.scss";
import { connectDB } from "@/lib/MongoDb/dbConnect";

const PATH_VALUE = ["item", "item2", "both", "none"];

export default function Home() {
  const btnHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pPath: string
  ) => {
    if (pPath === "none") return localStorage.removeItem("path");
    localStorage.setItem("path", pPath);
  };

  return (
    <main className={S.main}>
      <div className={S.mainCtnts}>
        <p>app 라우트 메인페이지 &#34;src/app/page.tsx&#34;</p>
        <p>헤더 영역의 title을 클릭하면 해당 라우팅으로 이동합니다.</p>
        <p>
          각각의 라우팅들은 app폴더 내 title 이름으로 폴더가 생성되어 있습니다
        </p>
        <p>아래의 버튼은 localStorage 내 pPath 값을 변경해줍니다.</p>
        <p>해당값에따라 parallel에서 렌더링 되는 페이지가 달라지게 됩니다.</p>
        <div className={S.btnWrapper}>
          {PATH_VALUE.map((path: string, idx: number) => {
            return (
              <button key={idx} onClick={event => btnHandler(event, path)}>
                {path}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
