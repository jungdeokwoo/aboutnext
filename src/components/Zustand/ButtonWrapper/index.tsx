import React from "react";

const ButtonWrapper = ({
  increaseHandler,
  decreaseHandler,
}: {
  increaseHandler: () => void;
  decreaseHandler: () => void;
}) => {
  return (
    <div>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
    </div>
  );
};

export default ButtonWrapper;
