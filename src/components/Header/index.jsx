import React from "react";
import { BurgerContext } from "../../App";

const Header = (props) => {
  const burgerRef = React.useRef();
  const { setBurgerIsOpen } = React.useContext(BurgerContext);

  function handleClickBurgerBtn() {
    setBurgerIsOpen(true);
  }

  return (
    <header className="header">
      <div className="header__top">
        <div
          ref={burgerRef}
          className="burger-menu__button"
          onClick={handleClickBurgerBtn}
        >
          <span></span>
        </div>
        <img src="./assets/img/logo.png" alt="" className="logo" />
      </div>
      <main className="header__main">
        <div className="header__main-bg"></div>
        <h1 className="title">ПРОЕКТ «ПРАВОВОЙ МИР КАВКАЗА»</h1>
      </main>
    </header>
  );
};

export default Header;
