import React from "react";
import S from "./style.module.scss";

export default function Default() {
  return (
    <div className={S.box}>
      <p>모달창을 띄운상태에서 새로고침을 하거나</p>
      <p>직접 url 을 입력하고 접근하는경우</p>
      <p>해당 컴포넌트와 match되는 url 과 실제 url이 다르기 때문에</p>
      <p>404 Error가 나타나지만</p>
      <p>폴더 내 default.tsx 파일을 만들어두면</p>
      <p>error 시 fallback으로 해당 컴포넌트가 렌더링 됩니다.</p>
      <p>@item2 폴더 내 default.tsx 파일입니다</p>
    </div>
  );
}
