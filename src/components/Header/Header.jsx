import React, { useState } from "react";

import classes from "./Header.module.css";
import LOGO from "../../assets/myw.svg";
import Input from "../UI/Input/Input";
import Results from "../Results/Results";

const Header = () => {
  const [city, setCity] = useState("");

  const setCityHandle = (e) => setCity(e.target.value);

  return (
    <header className={classes.header}>
      <section class="nav-menu">
        <img src={LOGO} alt="" class="MyW Logo" />
        <form class="nav-menu__form">
          <Input
            type="text"
            class={classes.serachField}
            onAction={setCityHandle}
            value={city}
            placeholder="Search city"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={classes.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
          <Results />
        </form>
        <div className={classes.optionsTheme}>
          <div className={classes.theme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`${classes.icon} ${classes.dark}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="icon nav-menu__options__theme__light hidden"
              className={`${classes.icon} ${classes.light} ${classes.hidden}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          <div className={classes.optionsLang}>
            <select className={classes.langSelect}>
              <option disabled>LANG</option>
              <option value="en" className={classes.langSelectOption}>
                EN
              </option>
              <option value="pl" className={classes.langSelectOption}>
                PL
              </option>
            </select>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
