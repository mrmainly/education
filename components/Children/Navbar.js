import ocul from "../../images/ocul.png";
import logo from "../../images/logo1.png";
import React, { useState } from "react";
export default function Navbar() {
  const [drop, setDrop] = useState(true);
  return (
    <div className="Nav">
      <div className="navbarTop">
        <div className="navbarTop__left-block">
          <a className="navbar__text">DIGITAL EDUCATION</a>
          <div className="none" />
          <a className="navbar__text-blue">Дистанционное образование</a>
        </div>
        <div className="navbarTop__right-block">
          <a className="navbar__text-Search">образовательная платформа</a>
          <div className="none-Search" />
          <a className="navbar__text">ENG</a>
          <div className="none"></div>
          <img className="navbar__img" src={ocul} alt={"qwedfq"} id={ocul} />
          <div className="hamburger">
            <div
              className="hamburger__block"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <span className="hamburger__item"></span>
              <span className="hamburger__item"></span>
              <span className="hamburger__item"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarDown">
        <div>
          <img src={logo} alt={"a logo"} className="logo" />
        </div>
        <div className="menu">
          {drop && (
            <div className="topmenu">
              <li>
                <a className="menu-title">О центре</a>
                <div className="submenu">
                  <a>Дистант</a>
                  <a>Открытые центры</a>
                  <a>Инстетуты</a>
                  <a>Бакалавриат</a>
                  <a>Магистратура</a>
                  <a>Колледжи</a>
                  <a>Предуниверсарий СПО</a>
                  <a>Университетская школа</a>
                  <a>Детский центр развития “Маленький Лис”</a>
                  <a>Дополнительное образование</a>
                  <a>Провайдер-центр IB</a>
                  <a>Открытые лекции</a>
                  <a>Личный кабинет</a>
                  <a>СДО Moodle</a>
                  <a>Выпускные квалификационные работы</a>
                </div>
              </li>
              <li>
                <a className="menu-title">Образовательная центре</a>
                <div className="submenu">
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                </div>
              </li>
              <li>
                <a className="menu-title">Новости</a>
                <div className="submenu">
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                </div>
              </li>
              <li>
                <a className="menu-title">Мунеципальные опорные центры</a>
                <div className="submenu">
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                </div>
              </li>
              <li>
                <a className="menu-title">Расписание занятий</a>
                <div className="submenu">
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                </div>
              </li>
              <li>
                <a className="menu-title">Персонализированная финансирование</a>
                <div className="submenu">
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                  <a>Дистант</a>
                </div>
              </li>
            </div>
          )}
        </div>

        <div className="input-block">
          <input className="input-block__input" type="text" />
        </div>
      </div>
    </div>
  );
}
