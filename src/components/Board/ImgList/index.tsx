import React from "react";
import S from "./styles.module.scss";
import ImgCard from "../ImgCard";
import { ImgListProps } from "@/types/Board/type";

const ImgList = ({ imgList }: { imgList: ImgListProps[] }) => {
  return (
    <div className={S.imgList}>
      {imgList && imgList.map(el => <ImgCard key={el._id} item={el} />)}
    </div>
  );
};

export default ImgList;
