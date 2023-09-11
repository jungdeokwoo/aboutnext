import UserCard from "@/components/Compare/UserCard";
import Modal from "@/components/Modal";
import React from "react";

const getUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const userData = await response.json();
  return userData;
};

const SSRpage = async ({ params: { id } }: { params: { id: string } }) => {
  const userData = await getUser(id);
  return (
    <Modal>
      <UserCard userInfo={userData} rendering="SSR" set="2" path="ssr" />
    </Modal>
  );
};

export default SSRpage;
