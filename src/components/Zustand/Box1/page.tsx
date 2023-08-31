"use client";

import React from "react";
import ExampleBox from "../ExampleBox";
import { useZustandStore } from "@/store/zustand";
import ButtonWrapper from "../ButtonWrapper";

const Box1 = () => {
  const zustandStore = useZustandStore();

  return (
    <ExampleBox>
      <p>첫번째 박스</p>
      <p>ZustandStore 에서 first,second,third 값을 가져옵니다</p>
      <div>
        <p>first : {zustandStore.first}</p>
        <ButtonWrapper
          increaseHandler={() => zustandStore.increaseFirstHandler()}
          decreaseHandler={() => zustandStore.decreaseFirstHandler()}
        />
      </div>
      <div>
        <p>second : {zustandStore.second}</p>
        <ButtonWrapper
          increaseHandler={() => zustandStore.increaseSecondHandler()}
          decreaseHandler={() => zustandStore.decreaseSecondHandler()}
        />
      </div>
      <div>
        <p>third : {zustandStore.third}</p>
        <ButtonWrapper
          increaseHandler={() => zustandStore.increaseThirdHandler()}
          decreaseHandler={() => zustandStore.decreaseThirdHandler()}
        />
      </div>
    </ExampleBox>
  );
};

export default Box1;
