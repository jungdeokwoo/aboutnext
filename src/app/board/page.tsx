import React from "react";
import S from "./styles.module.scss";
import { ListProps } from "@/types/Board/type";
import { revalidateTag } from "next/cache";
import UserCard from "@/components/Compare/UserCard";

const getBoardList = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/board`, {
    cache: "no-cache",
    next: { tags: ["boardList"] },
  });
  const listData = response.json();
  return listData;
};

export default async function Board() {
  const boardList = await getBoardList();

  const deleteHandler = async (formData: FormData) => {
    "use server";
    console.log(process.env.BASE_URL, "<<URL");
    const response = await fetch(`${process.env.BASE_URL}/api/board`, {
      method: "DELETE",
      body: JSON.stringify({ _id: formData.get("listId") }),
      cache: "no-cache",
    });
    const result = await response.json();
    console.log(result, "delete");
    revalidateTag("list");
  };

  const createHandler = async (formData: FormData) => {
    "use server";
    console.log(formData, "<????");
    const response = await fetch(`${process.env.BASE_URL}/api/board`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        length: boardList.length,
      }),
      cache: "no-cache",
    });
    const result = await response.json();
    console.log(result, "create");
    revalidateTag("list");
  };

  return (
    <>
      <form name="regist" className={S.registerBox} action={createHandler}>
        <label htmlFor="name">
          <p>이름</p>
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="username">
          <p>ID</p>
          <input type="text" id="username" name="username" />
        </label>
        <label htmlFor="email">
          <p>이메일</p>
          <input type="text" id="email" name="email" />
        </label>
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
