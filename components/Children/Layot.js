import { Carousel } from "react-bootstrap";
import fon from "../../images/fon.png";

export default function Layot() {
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

            <style>{`
.containerOne {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  margin-top: 10px;
}
@media (max-width: 1100px) {
  .containerOne {
      width: 1100px;
  }
}

  .wrapper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    justify-content: center;
    
}
.btn__border {
    background:transparent;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 170px;
    height: 53px;
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: flex-end;
    padding-left: 10%;
}

.btn__border-two {
    background:transparent;
    border: 2px solid #FFFFFF;
    width: 170px;
    height: 50px;
    font-size: 20px;
    color: #fff;
   margin-top: -42px;
   margin-left: 20px;
}

._btn {
    background:transparent;
    border: 0px solid #FFFFFF;
    width: 150px;
    height: 40px;
    font-size: 20px;
    color: #fff;
    background: rgba(196, 196, 196, 0.5);
}

.block {
    padding-top: 30px;
}
.title__text {
  margin-top: 30px;
  color: #fff;
  text-align: center;
}
`}</style>
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
