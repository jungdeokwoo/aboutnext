"use client";

import React from "react";
import ExampleBox from "../ExampleBox";
import { useZustandStore } from "@/store/zustand";
import { shallow } from "zustand/shallow";
import ButtonWrapper from "../ButtonWrapper";

const Box3 = () => {
  const {
    third,
    forth,
    increaseThirdHandler,
    decreaseThirdHandler,
    increaseForthHandler,
    decreaseForthHandler,
  } = useZustandStore(state => {
    return {
      third: state.third,
      forth: state.forth,
      increaseThirdHandler: state.increaseThirdHandler,
      decreaseThirdHandler: state.decreaseThirdHandler,
      increaseForthHandler: state.increaseForthHandler,
      decreaseForthHandler: state.decreaseForthHandler,
    };
  }, shallow);
  return (
    <ExampleBox>
      <p>세번째 박스</p>
      <p>ZustandStore 에서 third,forth 값을 가져옵니다</p>
      <div>
        <p>third : {third}</p>
        <ButtonWrapper
          increaseHandler={() => increaseThirdHandler()}
          decreaseHandler={() => decreaseThirdHandler()}
        />
      </div>
      <div>
        <p>forth : {forth}</p>
        <ButtonWrapper
          increaseHandler={() => increaseForthHandler()}
          decreaseHandler={() => decreaseForthHandler()}
        />
      </div>
    </ExampleBox>
  );
};

export default Box3;
