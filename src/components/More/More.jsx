import React from "react";

import Wind from "./Wind";
import Temp from "./Temp";
import Precipitation from "./Precipitation";

import classes from "./More.module.css";

const More = () => {
  return (
    <>
      <section>More</section>
      <Wind />
      <Temp />
      <Precipitation />
    </>
  );
};

export default More;
