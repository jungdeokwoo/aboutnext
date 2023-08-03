import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

const About = () => {
  return (
    <main className={style.main}>
      about 페이지<Link href="/about/modal">modal</Link>
    </main>
  );
};

export default About;
