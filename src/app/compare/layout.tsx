import React from "react";
import S from "./style.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR/SSR 페이지 비교",
  description: "CSR과 SSR의 페이지 특성비교",
};

export default function layout({
  children,
  csr,
  ssr,
}: {
  children: React.ReactNode;
  ssr: React.ReactNode;
  csr: React.ReactNode;
}) {
  return (
    <div className={S.compareWrp}>
      <header className={S.header}>compare 헤더 /app/compare</header>
      <div className={S.description}>
        <p>아래 두 화면은 서로다른 컴포넌트로 구성되어있습니다.</p>
        <p>왼쪽은 대표적인 ClientSideRendering</p>
        <p>오른쪽은 ServerSideRendering 입니다.</p>
        <p>
          첫번째로 새로고침을 했을때, SSR영역이 렌더링이 훨씬 빠르다는것을 확인
          할 수 있습니다.
        </p>
        <p>자바스크립트를 끄고 페이지를 확인해 보았을 때</p>
        <p>
          SSR 영역은 서버에서 html을 그려주고 나서 받아오기 때문에 아무문제없이
          나타나지만
        </p>
        <p>CSR 영역은 아무것도 나타나지 않는것을 확인할 수 있습니다.</p>
      </div>
      <section>
        {csr}
        {ssr}
      </section>
    </div>
  );
}
