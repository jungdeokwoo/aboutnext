import React from "react";
import S from "./styles.module.scss";
import { ListProps } from "@/types/Board/type";
import { revalidateTag } from "next/cache";
import UserCard from "@/components/Compare/UserCard";

const getBoardList = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/board`, {
    cache: "no-cache",
    next: { tags: ["list"] },
  });
  const listData = response.json();
  return listData;
};

export default async function Board() {
  const boardList = await getBoardList();

  const deleteHandler = async (formData: FormData) => {
    "use server";
    fetch(`${process.env.BASE_URL}/api/board`, {
      method: "DELETE",
      body: JSON.stringify({ _id: formData.get("listId") }),
      cache: "no-cache",
    })
      .then(res => res.json())
      .then(res => console.log(res, "<<<<"));
    revalidateTag("list");
  };

  const createHandler = async (formData: FormData) => {
    "use server";
    fetch(`${process.env.BASE_URL}/api/board`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        age: 30,
      }),
      cache: "no-cache",
    })
      .then(res => res.json())
      .then(res => console.log(res, "<<<<"));
    revalidateTag("list");
  };

  return (
    <>
      <form className={S.registerBox} action={createHandler}>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">ID</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" />
        </div>
        <button type="submit">등록하기</button>
      </form>
      <div className={S.userListWrap}>
        {boardList.map((list: ListProps, idx: number) => (
          <form key={list._id} action={deleteHandler}>
            <UserCard
              userInfo={{
                id: idx,
                name: list.name,
                username: list.username,
                email: list.email,
              }}
              rendering="ssr"
              set="1"
              path="board"
            />
            <button name="listId" value={list._id}>
              X
            </button>
          </form>
        ))}
      </div>
    </>
  );
}
