"use client";

import React, { useEffect, useRef, useState } from "react";
import S from "./layout.module.scss";

export default function BasicRouting() {
  const [pageNum, setPageNum] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (!boxRef.current?.offsetTop) return;
      const scrollY = Math.floor(window.scrollY / 1000) + 1;

      if (window.scrollY > boxRef.current?.offsetTop && scrollY === 1) {
        setPageNum(1);
      } else if (scrollY === 2) {
        setPageNum(2);
      } else if (scrollY === 3) {
        setPageNum(3);
      } else if (scrollY === 4) {
        setPageNum(4);
      } else if (scrollY === 5) {
        setPageNum(5);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [pageNum]);

  return (
    <div ref={boxRef} className={S.stickyContainer}>
      <div className={S.sticky}>
        <div className={S.slideContainer}>
          <div className={`${S.slide} ${pageNum === 1 && S.enabled}`}>
            <div className={S.slideBigText}>
              <p>안녕하세요.</p>
            </div>
          </div>
          <div className={S.scdown}>
            <div className={S.scdownText}>아래로 스크롤하세요.</div>
          </div>
          <div className={`${S.slide} ${pageNum === 2 && S.enabled}`}>
            <div className={S.slideBigText}>
              <p>처음 뵙겠습니다.</p>
            </div>
          </div>
          <div className={`${S.slide} ${S.Sl3} ${pageNum === 3 && S.enabled}`}>
            <div className={S.slideBigText}>
              <p>지금 보고계신 페이지는</p> <p>테스트중인 페이지입니다</p>
            </div>
          </div>
          <div
            className={`${S.slide} ${S.slideLeft} ${S.sl4} ${
              pageNum === 4 && S.enabled
            }`}
          >
            <div className={S.sl4Content}>
              <div className={S.slideBigText}>
                <p>자세한</p> <p>설명이</p> <p>있을 수도 있어요</p>
              </div>
              <div className={S.slideSmallText}>
                <p>그렇습니다.</p> <p>이건</p> <p>글씨가 좀 작습니다.</p>
              </div>
            </div>
          </div>
          {/* <div className={S.wave}>뭔가 독립적으로 움직이는 배경</div> */}
          <div
            className={`${S.slide} ${S.slideLeft} ${S.sl5} ${
              pageNum === 5 && S.enabled
            }`}
          >
            <div className={S.slideBigText}>
              <p>당신의 행복한</p>
              <p>하루를 응원합니다.</p>
            </div>
            <div className={S.goSurfWrapper}>
              <a>ㅎㅎㅎㅎㅎㅎ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
