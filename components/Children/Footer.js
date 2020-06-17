import logo from "../../images/logo-j.svg";
import { ProgressBar } from "react-bootstrap";

export default function footer() {
  return (
    <div className="Container-Footer">
      <div className="Footer">
        <div className="row">
          <div className="col">
            <div className="Under-col">
              <img src={logo} alt={"a logo"} className="footer__logo" />
              <p>
                Государственное автономное нетиповое образовательное учреждение
                Республики Саха (Якутия) Республиканский ресурсный центр «ЮНЫЕ
                ЯКУТЯНЕ»
              </p>
            </div>
          </div>

          <div className="col">
            <div>
              <p>полезные ссылки</p>
              <ProgressBar now={20} variant="info" className="Progress" />
            </div>

            <div>
              <div className="footer__text-block">
                <a>горячая линия</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a>РРЦ "Юные якутяне"</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a>Обращения</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a>Контакты</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a> Вопросы</a>
              </div>
              <div className="footer-line" />
            </div>
          </div>
          <div className="col">
            <div>
              <p>Сотрудники</p>
              <ProgressBar now={20} variant="info" className="Progress" />
            </div>
            <div>
              <div className="footer__text-block">
                <a>дирекция управления</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a>Центры</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a>Отделы</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a>Общественные организации</a>
              </div>
              <div className="footer-line" />
              <div className="footer__text-block">
                <a> Документы</a>
              </div>
              <div className="footer-line" />
            </div>
          </div>
          <div className="col">
            <div>
              <p>Контакты</p>
              <ProgressBar now={20} variant="info" className="Progress" />
            </div>
            <div>
              <li className="col-li">
                <a>677000, Якутск</a>
              </li>
              <li className="col-li">
                <a>Проспект Ленина 1</a>
              </li>
              <li className="col-li">
                <a>+8 888 888 88 88</a>
              </li>
              <li className="col-li">
                <a>8888@spo.ru </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="under-footer">
        <div className="navbarTop">
          <div className="navbarTop__left-block">
            <a className="navbar__text">РРЦ "Юные Якутине</a>
            <div className="none" />
            <a className="navbar__text">
              Сведения об образовательной организации
            </a>
            <div className="none" />
            <a className="navbar__text">
              Министерство образования и науки РС(Я)
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
                .Progress {
                    height: 10px;
                    width: 100%;
                }
                .Container-Footer {
                    margin-top: 190px;
                    max-width: 1300px;
                    min-width: 1100px;
                    display: flex;
                    flex-direction: column;
                    color: #fff;
                    margin: 0px auto;
                    margin-top: 180px;
                }
                @media (max-width: 600px) {
                    .row {
                        flex-direction: column;
                    }
                }
                .col-li {
                    margin-top: 15px;
                }
                li {
                    list-style-type: none;
                }
                .Footer {
                    display: flex;
                    height: 100%;
                    margin-top: 10px;
                    background: #0070B8;
                }
                .under-footer {
                    background: #0063A3;
                    height: 40px;
                    max-width: 1300px;
                    min-width: 1100px;
                    padding-left: 50px;
                }
                @media (max-width: 900px) {
                    .col {
                        padding-left: 20px;
                    }
                }
                .col {
                    width: 250px;
                    margin-left: 50px;
                    
                }
                @media (max-width: 1200px) {
                    .col {
                        margin-left: 20px;
                    }
                }
                @media (max-width: 900px) {
                    .col {
                        padding-left: 20px;
                    }
                }
                .Under-col {
                  text-align: center;
                  display: flex;
                  flex-direction: column;
              }
                @media (max-width: 600px) {
                    .col {
                        width: 970px;
                        height: 400px;
                        margin-top: 110px;
                    }
                    .col a {
                        font-size: 40px;
                    }
                    .col p {
                      font-size: 40px;
                  }
                    .Progress {
                        margin-top: 0px;
                    }
                    .footer-line {
                        margin-top: 15px;
                    }
                    .Under-col {
                        flex-direction: row;
                        text-align: left;
                    }
                    .footer__logo {
                        margin-right: 50px;
                    }
                }
          
                .footer-line {
                    border: 1px solid rgba(0, 0, 0, 0.5);
                    height: 0px;
                }
                .footer__text-block {
                    margin-top: 5px;
                }
                `}
      </style>
    </div>
  );
}
