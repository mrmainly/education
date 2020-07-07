import logo from "../../images/logo-j.svg";
import { ProgressBar } from "react-bootstrap";

export default function footer() {
  return (
    <div className="Container-Footer">
      <div className="Footer">
        <div className="Footer__row">
          <div className="col">
            <div className="Under-col">
              <img src={logo} alt={"a logo"} className="footer__logo" />
              <p className="footer-text">
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
        <div className="under-footer__column">
          <div className="under-footer__block">
            <a>РРЦ "Юные Якутине"</a>
            <div className="under-footer__none" />
          </div>

          <div className="under-footer__block">
            <a>Сведения об образовательной организации</a>
            <div className="under-footer__none" />
          </div>

          <div className="under-footer__block">
            <a>Министерство образования и науки РС(Я)</a>
          </div>
        </div>
      </div>
    </div>
  );
}
