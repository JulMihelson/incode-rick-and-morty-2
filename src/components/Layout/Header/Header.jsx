import React from "react";
import css from "./Header.module.css";
import symbolDefs from "../../../assets/symbol-defs.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <svg className={css.logoIcon} width="40" height="40">
            <use href={symbolDefs + "#logo"}></use>
          </svg>
        </nav>
      </header>
      <main>
        <section className={css.heroSection}>
          <h1 className={css.title}>The Rick and Morty API</h1>
          <div className={css.hero}>
            <svg className={css.shades} width="346" height="211">
              <use href={symbolDefs + "#rick-amd-morty-shades"}></use>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
