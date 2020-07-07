import Video_Cards from "./Video_Cards";
import { ProgressBar } from "react-bootstrap";
import Swiper from "react-id-swiper";

export default function Video(props) {
  return (
    <div className="Gallery-main">
      <div className="Container">
        <div className="scale">
          <h3 className="scale__title">Видеоблог</h3>
          <div className="scale__btn">все видео</div>
        </div>

        <ProgressBar now={20} variant="info" className="Progress" />
      </div>

      <div className="container-gallery">
        <div className="gallery__row">
          <Swiper>
            {props.Video.map((e) => (
              <Video_Cards img={e.img} />
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
