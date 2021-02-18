import React from "react";
import "../Header.css";
import { timestampParser } from "../utils";

const HeaderPage = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://marketing-nova.com/wp-content/uploads/2020/10/1200x630wa.png"
        alt="logo"
      />

      <div className="header__nav">
        <div className="header__option">
          <h1 className="header__optionLineOne">
            Bonjour nous somme le {timestampParser(Date.now())}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
