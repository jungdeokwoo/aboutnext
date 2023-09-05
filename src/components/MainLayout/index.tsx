"use client";

import Link from "next/link";
import React from "react";
import S from "./styles.module.scss";
import { useSelectedLayoutSegments } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments();

  return (
    <>
      <header className={S.header}>
        <Link href="/">Main</Link>
        <Link href="/basicRouting">BasicRouting</Link>
        <Link href="/parallel">Parallel</Link>
        <Link href="/compare">CSR/SSR</Link>
        <Link href="/library">Library</Link>
        <Link href="/product">Product</Link>
      </header>
      <div className={S.routeNm}>
        <p>
          메인 레이아웃 영역, 현재 url 주소는 : /{segments.join("/")} 입니다.
        </p>
        <p>
          이 컴포넌트는 use client를 선언했고, useSelectedLayoutSegments 훅을
          사용하여 만들었지만 자바스크립트를 끄고 봐도 그대로 나타나고 있습니다
        </p>
      </div>

      {children}
    </>
  );
};
export default MainLayout;
