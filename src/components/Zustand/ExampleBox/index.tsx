"use client";

import React from "react";
import S from "./styles.module.scss";

const ExampleBox = ({ children }: { children: React.ReactNode }) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return (
    <div
      className={S.box}
      style={{
        color: `rgb(${red},${green},${blue})`,
        border: `1px solid rgb(${red},${green},${blue})`,
      }}
    >
      {children}
    </div>
  );
};

export default ExampleBox;
