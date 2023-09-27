import React from "react";
import S from "./styles.module.scss";

const LoadingCircle = () => {
  return (
    <div className={S.circleWrap}>
      <div className={S.circle}>
        <div />
      </div>
    </div>
  );
};

export default LoadingCircle;
