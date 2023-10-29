import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Actual from "../Actual/Actual";

import classes from "./Home.module.css";
import More from "../More/More";

const Home = () => {
  return (
    <>
      <Header />
      <div className={classes.mainContainer}>
        <main className={classes.mainContent}>
          <Actual />
          <More />
          <section>More container temp</section>
          <section>More Container Wind</section>
          <section>More container precipitation</section>
          <section>Forecast Container</section>
        </main>
      </div>
      <main></main>
      <Footer />
    </>
  );
};

export default Home;
