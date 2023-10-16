"use client";

import React, { useMemo, useState } from "react";
import S from "./styles.module.scss";
import Image from "next/image";

export default function ImagePage() {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const imgSize = useMemo(() => {
    return { width: 400, height: 600 };
  }, []);

  const moveHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.isPropagationStopped();

    const divOffset = {
      top: event.currentTarget.offsetTop,
      left: event.currentTarget.offsetLeft,
    };
    const minTop = imgSize.height / 4;
    const maxTop = imgSize.height - imgSize.height / 4;
    const minLeft = imgSize.width / 4;
    const maxLeft = imgSize.width - imgSize.width / 4;

    let posTop, posLeft;

    if (event.pageY < divOffset.top + minTop) {
      posTop = divOffset.top + minTop;
    } else if (divOffset.top + maxTop < event.pageY) {
      posTop = divOffset.top + maxTop;
    } else {
      posTop = event.pageY;
    }

    if (event.pageX < divOffset.left + minLeft) {
      posLeft = divOffset.left + minLeft;
    } else if (divOffset.left + maxLeft < event.pageX) {
      posLeft = divOffset.left + maxLeft;
    } else {
      posLeft = event.pageX;
    }

    posTop &&
      posLeft &&
      setPos({ top: posTop - divOffset.top, left: posLeft - divOffset.left });
  };

  const leaveHandler = () => {
    setPos(null);
  };

  return (
    <main className={S.mainContent}>
      <div
        className={S.imgWrapper}
        onMouseLeave={leaveHandler}
        onMouseMove={event => moveHandler(event)}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_MY_S3_URL}/%40timetable.jpg`}
          width={imgSize.width}
          height={imgSize.height}
          alt="image"
          priority
        />
        {pos && (
          <div
            className={S.scanDiv}
            style={{
              width: imgSize.width / 2,
              height: imgSize.height / 2,
              top: pos.top,
              left: pos.left,
            }}
          />
        )}
        {pos && (
          <div
            className={S.thumbNail}
            style={{
              width: imgSize.width,
              height: imgSize.height,
              backgroundImage: `url(${process.env.NEXT_PUBLIC_MY_S3_URL}/%40timetable.jpg)`,
              backgroundPosition: `${-pos.left * 2 + imgSize.width / 2}px ${
                -pos.top * 2 + imgSize.height / 2
              }px`,
            }}
          />
        )}
      </div>
    </main>
  );
}
