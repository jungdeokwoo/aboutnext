"use client";

import React from "react";
import S from "./layout.module.scss";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const LibraryLayout = ({ children }: { children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className={S.nav}>
      <ul>
        <li>/library 내 layout.tsx 파일입니다</li>
        <li>아래의 항목을 클릭하면 해당항목 관련 페이지로 이동합니다.</li>
        <li>
          현재 경로에서의 useSelectedLayoutSegment 값은 해당폴더 하위 첫번째
          경로이름을 보여줍니다.
        </li>
        <li>따라서 현재 subMenu의 타이틀은 {segment || "-"} 입니다.</li>
      </ul>
      <div className={S.subMenu}>
        <Link href="/library/zustand">Zustand</Link>
      </div>
      {children}
    </div>
  );
};

export default LibraryLayout;
