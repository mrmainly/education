import { Carousel } from "react-bootstrap";

export default function Calen_Cards(props) {
  return (
    <div className="calen">
      <div className="calen__block">
        <div className="calen__cards">
          <Carousel.Item>
            <img
              src={props.img}
              alt="calendar__img"
              className="calendar__img"
            />
            <Carousel.Caption>
              <h5 className="calen__title">{props.title}</h5>
              <p className="calen__text">{props.text}</p>
              <div className="row__line"></div>
              <div className="row__time">19.05.2020</div>
            </Carousel.Caption>
          </Carousel.Item>
        </div>
      </div>
    </div>
  );
}
