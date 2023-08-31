"use client";

import React from "react";
import ExampleBox from "../ExampleBox";
import { useZustandStore } from "@/store/zustand";
import { shallow } from "zustand/shallow";
import ButtonWrapper from "../ButtonWrapper";

const Box2 = () => {
  const {
    first,
    second,
    increaseFirstHandler,
    decreaseFirstHandler,
    increaseSecondHandler,
    decreaseSecondHandler,
  } = useZustandStore(state => {
    return {
      first: state.first,
      second: state.second,
      increaseFirstHandler: state.increaseFirstHandler,
      decreaseFirstHandler: state.decreaseFirstHandler,
      increaseSecondHandler: state.increaseSecondHandler,
      decreaseSecondHandler: state.decreaseSecondHandler,
    };
  }, shallow);

  return (
    <ExampleBox>
      <p>두번째 박스</p>
      <p>ZustandStore 에서 first,second 값을 가져옵니다</p>
      <div>
        <p>first : {first}</p>
        <ButtonWrapper
          increaseHandler={() => increaseFirstHandler()}
          decreaseHandler={() => decreaseFirstHandler()}
        />
      </div>
      <div>
        <p>second : {second}</p>
        <ButtonWrapper
          increaseHandler={() => increaseSecondHandler()}
          decreaseHandler={() => decreaseSecondHandler()}
        />
      </div>
    </ExampleBox>
  );
};

export default Box2;
