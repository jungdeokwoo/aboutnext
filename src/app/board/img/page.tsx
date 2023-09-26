import React, { Suspense } from "react";
import S from "./styles.module.scss";
import ImgList from "@/components/Board/ImgList";
import ImgUpLoad from "@/components/Board/ImgUpLoad";
import { ImgListProps } from "@/types/Board/type";
import LoadingCircle from "@/components/LoadingCircle";

const getImgList = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/board/img/url`, {
    cache: "no-cache",
    next: { tags: ["imgList"] },
  });
  const imgList = await response.json();
  return imgList;
};

const ImgPage = async () => {
  const imgList: ImgListProps[] = await getImgList();

  return (
    <div className={S.imgWrapper}>
      <Suspense fallback={<LoadingCircle />}>
        <ImgUpLoad />
        <ImgList imgList={imgList} />
      </Suspense>
    </div>
  );
};

export default ImgPage;
