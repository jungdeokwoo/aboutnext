"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import S from "./styles.module.scss";
import Image from "next/image";
import { getSignedURL } from "@/utils/getSignedUrl";

const ImgUpLoad = () => {
  const router = useRouter();

  const [imgFile, setImgFile] = useState<File[] | null>(null);
  const [signedUrl, setSignedUrl] = useState("");

  const postImg = async () => {
    if (!imgFile) return;

    try {
      const s3Res = await fetch(signedUrl, {
        method: "PUT",
        body: imgFile[0],
      });
      setImgFile(null);
      if (s3Res.ok) {
        try {
          const res = await fetch("/api/board/img/url", {
            method: "POST",
            body: encodeURIComponent(imgFile[0].name),
          });
          if (res.ok) {
            alert("이미지 등록성공");
            router.refresh();
          } else {
            throw new Error("DB접속오류");
          }
        } catch {
          throw new Error("error");
        }
      } else {
        throw new Error("error");
      }
    } catch (e) {
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
    <>
      <div className={S.imgOpt}>
        {imgFile ? (
          <Image
            src={URL.createObjectURL(imgFile[0])}
            width={400}
            height={500}
            alt="업로드 이미지"
            fill={false}
            sizes="content-fit"
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
    </>
  );
};

export default ImgUpLoad;
