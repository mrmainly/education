import { Carousel } from "react-bootstrap";
import fon from "../../images/fon.png";

export default function Layout() {
  return (
    <Carousel className="containerOne">
      <Carousel.Item>
        <img className="d-block w-100" src={fon} alt="First slide" />
        <Carousel.Caption>
          <div className="wrapper-container">
            <div className="title">
              <h1 className="title__text">
                Онлайн-курсы от республиканского центра
                <br /> "Юные якутяне"
              </h1>
              <h3 className="title__text">
                Платформа с курсами открыта для всех
              </h3>
            </div>
            <div className="block">
              <div className="btn__border">
                <input className="_btn" type="button" value="Смотреть" />
              </div>
              <div className="btn__border-two" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={fon} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={fon} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
