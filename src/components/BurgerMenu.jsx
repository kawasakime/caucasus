import React from "react";
import { BurgerContext } from "../App";

const BurgerMenu = ({ ref }) => {
  const { burgerIsOpen, setBurgerIsOpen } = React.useContext(BurgerContext);

  function handleClickCloseBurgerBtn() {
    setBurgerIsOpen(false);
  }

  const list = [
    {
      link: "#info",
      title: "О проекте",
    },
    {
      link: "#organizer",
      title: "Руководитель проекта",
    },
    {
      link: "#so-organizers",
      title: "Участники проекта",
    },
    {
      link: "#sections",
      title: "Структура проекта",
    },
    {
      link: "#projects",
      title: "Подпроекты" 
    },
    {
      link: "#contacts",
      title: 'Контакты'
    }
  ];

  return (
    <div className={`burger-menu${burgerIsOpen ? " active" : undefined}`} ref={ref}>
      <div className="bg"></div>
      <div className="burger-menu__panel">
        <div className="close" onClick={handleClickCloseBurgerBtn}></div>
        <ul>
          {list.map((item, i) => (
            <li key={i} onClick={handleClickCloseBurgerBtn}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
