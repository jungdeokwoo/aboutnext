"use client";

import React, { useState } from "react";
import S from "./styles.module.scss";

const ImgPage = () => {
  const [imgFile, setImgFile] = useState<File[] | null>(null);

  const postImg = async () => {
    fetch(`${process.env.BASE_URL}/api/img`);
  };

  // const formHandler = async () => {
  //   "use server";
  //   console.log("form");
  // };

  const imgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgArr = event.target.files;
    if (!imgArr) return;
    const fileList: File[] = Array.from(imgArr);
    setImgFile(fileList);
  };

  return (
    <div className={S.imgWrapper}>
      {imgFile && <img src={URL.createObjectURL(imgFile[0])} />}
      <form>
        <label htmlFor="imgUp">
          <p>이미지 업로드</p>
          <input id="imgUp" type="file" hidden onChange={imgHandler} />
        </label>
        <button>등록하기</button>
      </form>
    </div>
  );
};

export default ImgPage;
