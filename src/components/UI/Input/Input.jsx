import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={props.class}
      onInput={props.onAction}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
