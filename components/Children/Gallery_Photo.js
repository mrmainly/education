import Gallery_Photo_Cards from "./Gallery_Photo_Cards";
import { ProgressBar } from "react-bootstrap";
import Swiper from "react-id-swiper";

export default function Gallery_Photo(props) {
  const params = {
    slidesPerView: "auto",
  };
  return (
    <div className="Gallery-main">
      <div className="Container">
        <div className="scale">
          <h3 className="scale__title">Фотогалерея</h3>
          <div className="scale__btn">Вся галерея</div>
        </div>

        <ProgressBar now={20} variant="info" className="Progress" />
      </div>

      <div className="container-gallery">
        <div className="gallery__row">
          <Swiper {...params}>
            {props.Galler.map((e) => (
              <Gallery_Photo_Cards img={e.img} />
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
