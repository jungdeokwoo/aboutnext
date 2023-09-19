import React from "react";
import S from "./styles.module.scss";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={S.boardLayout}>
      <div className={S.linkWrap}>
        <Link href={"/board"}>User</Link>
        <Link href={"/board/img"}>Img</Link>
      </div>
      <div className={S.boardDscrpt}>
        <p>board 페이지는 ssr로 작동하고 있습니다.</p>
        <p>
          아래의 input과 등록버튼 영역과 user 카드 영역은 form 태그로 감싸져
          있습니다.
        </p>
        <p>
          ssr 에서는 자바스크립트를 적용할 수 없기에 따로 event handler를
          지정해줄 수 없습니다.
        </p>
        <p>따라서 form 의 action attribute 를 통해 함수를 실행시켜 주었고,</p>
        <p>
          해당 함수 안에는 use server 를 지정하여 server action 으로 작동되도록
          하였습니다.
        </p>
        <p>
          기본적으로는 next config 에 experimental의 serverActions에 true 값을
          지정해주었고
        </p>
        <p>자체 form 태그의 action 을 통해서 데이터를 전달하도록 하였습니다</p>
        <p>
          formData 형식은, {`".get('이름')"`} 형식으로 각각의 form 내부의
          태그들의 정보를 가져올 수 있었고,
        </p>
        <p>
          revalidateTag 를 통해서 데이터가 변경 된 후 캐쉬되어있는 데이터가 아닌
        </p>
        <p>갱신된 데이터를 받아올 수 있었습니다.</p>
      </div>
      {children}
    </div>
  );
};

export default layout;
