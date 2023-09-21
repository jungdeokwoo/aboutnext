"use client";

import React, { useState } from "react";
import { getSignedURL } from "@/utils/getSignedUrl";
import S from "./styles.module.scss";
import Image from "next/image";

const ImgPage = () => {
  const [imgFile, setImgFile] = useState<File[] | null>(null);
  const [signedUrl, setSignedUrl] = useState("");

  const postImg = async () => {
    if (!imgFile) return;

    try {
      const s3Res = await fetch(signedUrl, { method: "PUT", body: imgFile[0] });
      setImgFile(null);
      return s3Res.ok ? alert("이미지등록성공") : alert("다시 시도해주세요");
    } catch {
      alert("이미지 등록을 실패하였습니다.");
    }
  };

  const imgHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgArr = event.target.files;

    if (!imgArr || imgArr.length === 0) return;
    if (imgArr.length > 1) return alert("1개의 이미지만 업로드 가능합니다.");

    const fileList: File[] = Array.from(imgArr);
    const [name, type] = [fileList[0].name, fileList[0].type];
    const url: string = await getSignedURL(name, type);
    setImgFile(fileList);
    setSignedUrl(url);
  };

  return (
    <div className={S.imgWrapper}>
      <div className={S.imgOpt}>
        {imgFile ? (
          <Image
            src={URL.createObjectURL(imgFile[0])}
            width={400}
            height={500}
            alt="업로드 이미지"
          />
        ) : (
          <div>
            <label htmlFor="imgUp">
              <p>이미지 업로드</p>
              <input
                id="imgUp"
                type="file"
                hidden
                onChange={imgHandler}
                accept=".jpg,.png"
              />
            </label>
          </div>
        )}
      </div>
      <div className={S.btnWrap}>
        <button onClick={postImg} disabled={!!!imgFile}>
          등록하기
        </button>
        <button onClick={() => setImgFile(null)} disabled={!!!imgFile}>
          이미지삭제
        </button>
      </div>
    </div>
  );
};

export default ImgPage;
