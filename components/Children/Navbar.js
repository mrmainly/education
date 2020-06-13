import ocul from "../../images/ocul.png";
import logo from "../../images/logo1.png";
export default function Navbar() {
  return (
    <div className="container">
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
            <div className="hamburger__block">
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
        <div>
          <div className="topmenu">
            <li>
              <a className="menu-title">О центре</a>
            </li>
            <li>
              <a className="menu-title">Образовательная центре</a>
            </li>
            <li>
              <a className="menu-title">Новости</a>
            </li>
            <li>
              <a className="menu-title">Мунеципальные опорные центры</a>
            </li>
            <li>
              <a className="menu-title">расписание занятий</a>
            </li>
            <li>
              <a className="menu-title">Персонализированная финансирование</a>
            </li>
          </div>
        </div>

        <div className="input-block">
          <input className="input-block__input" type="text" />
        </div>
      </div>
      <style>{`
    
    .navbarTop {
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
    }
   
    .navbarDown {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        align-items: center;
    }
    .none {
        text-decoration: none;
        width: 0px;
        height: 16px;
        border: 1px solid rgba(0, 0, 0, 0.6); 
        color: rgba(0, 0, 0, 0.6);
    }
    .menu-title {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        text-decoration: none;
        outline: none;
        display: block;
        transition: .4s ease-in-out;
        text-align: center;
        margin-left: 8px;
        margin-right: 8px;
        color: #000000;
    }
    
    .navbar__text {
        font-size: 14px;
        font-family: sans-serif;
        color: rgba(0, 0, 0, 0.6);
    }
    .navbar__text-blue {
        font-size: 14px;
        font-family: sans-serif;
        color: rgba(0, 112, 184, 0.6);
        margin-right: 20px;
        margin-left: 20px;
    }
    .navbarTop__left-block {
        display: flex;
    }
    .navbarTop__right-block {
        display: flex;
    }
    @media (max-width: 999px) {
        .navbarTop__right-block {
            margin-left: 340px;
        }
    }
    
    .navbar__text {
        margin-right: 20px;
        margin-left: 20px;
    }
    
    .navbar__text-Search {
        margin-right: 20px;
        margin-left: 20px;
    }
    
    .navbar__img {
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }
    
    @media (max-width: 1300px) {
        .navbar__img {
            width: 30px;
            height: 30px;
        }
    }
    @media (max-width: 600px) {
        .navbar__img {
            width: 60px;
            height: 60px;
        }
        .none {
            height: 45px;
        }
        .navbar__text {
            font-size: 45px;
        }
        .logo {
            width: 100px;
            padding-left: 50px;
        }
        .navbar {
            flex-direction: row;
        }
        .navbarDown {
            order: 1;
        }
        .navbarTop {
            order: 2;
            align-items: center;
        }
        
    }
    
    .hamburger {
       display: none;
       position: absolute;
    }
    .hamburger__block {
        display: flex;
        flex-direction: column;
        width: 50px;
        height: 50px;
    }
    .hamberger__item {
        background-color: blue;
        width: 100%;
        position: relative;
        height: 4px;
        margin-top: 10px;
    }
    
    @media (max-width: 600px) {
        .hamburger {
            display: flex;
            position: relative;
            flex-direction: row;
            margin-left: 230px;
        }
    }
    .logo {
        min-width: 50px;
        margin-left: 20px;
    }
    
    .input-block__input {
        border-radius: 23.5px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.5);
        outline: none;
        width: 350x;
        height: 26px;
    }
    
    @media (max-width: 1300px) {
        .input-block__input {
            width: 200px;
        }
    }
    
    .topmenu {
        list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      
    }
    
    .topmenu > li:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        height: 12px;
        background: #d2d2d2;
        top: 16px;
        box-shadow: 4px -2px 0 #d2d2d2;
        transform: rotate(30deg);
      }
    
      .topmenu > li:last-child:after {
        background: none;
        box-shadow: none;
      }
    
    
      .topmenu li a:hover { color: #c0a97a; }
    .submenu {
      position: absolute;
      width: 210px;
      background: #fafafa;
      border: 1px solid #ededed;
      z-index: 5;
      visibility: hidden;
      opacity: 0;
      transform: scale(.8);
      transition: .4s ease-in-out;
    }
    
    .submenu li a {
        padding: 10px 0;
        margin: 0 10px;
        border-bottom: 1px solid #efefef;
        font-size: 12px;
        color: #484848;
        font-family: 'Kurale', serif;
      }
    
      .topmenu > li:hover .submenu {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
      }
      .none-Search {
        text-decoration: none;
        width: 0px;
        height: 16px;
        border: 1px solid rgba(0, 0, 0, 0.6); 
        color: rgba(0, 0, 0, 0.6);
      }
    
      .navbar__text-Search {
        font-size: 14px;
        font-family: sans-serif;
        color: rgba(0, 0, 0, 0.6);
      }
    @media (max-width: 600px) {
        .navbarTop__left-block {
            position: absolute;
            opacity: 0;
        }
        .none-Search{
            position: absolute;
            opacity: 0;
        }
        .navbar-text-Search {
            position: absolute;
            opacity: 0;
        }
        .input-block__input {
            position: absolute;
            opacity: 0;
        }
        .topmenu {
            flex-direction: column;
            color: rgba(0, 112, 184, 0.6);
            display: none;
        }
        .topmenu a {
            font-size: 30px;
            margin-top: 5px;
            font-weight: bold;
        }
    } 
    `}</style>
    </div>
  );
}
