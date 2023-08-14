import React from "react";
import style from "./style.module.scss";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res, "<<res");

  return res.json();
}

const Dashboard = async () => {
  const data = await getData();
  console.log(data, "<<data");

  return (
    <main className={style.main}>
      {data.map((item: any) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </main>
  );
};

export default Dashboard;
