"use client";

import React, { useState } from "react";
import ExampleBox from "../ExampleBox";
import ButtonWrapper from "../ButtonWrapper";

const Box4 = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(prev => (prev += 1));
  };

  const decreaseHandler = () => {
    setCounter(prev => (prev -= 1));
  };

  return (
    <ExampleBox>
      <p>네번째 박스</p>
      <p>useState를 활용하여 counter라는 값을 가지고 있습니다(0)</p>
      <div>
        <p>counter : {counter}</p>
        <ButtonWrapper
          increaseHandler={() => increaseHandler()}
          decreaseHandler={() => decreaseHandler()}
        />
      </div>
    </ExampleBox>
  );
};

export default Box4;
