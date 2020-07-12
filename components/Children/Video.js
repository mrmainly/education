import Video_Cards from "./Video_Cards";
import { ProgressBar } from "react-bootstrap";
import Swiper from "react-id-swiper";
import Video_mob from "./Video_mob";
import Slider from "react-slick";

export default function Video(props) {
  const params = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 500,
  };
  const settingsMob = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 500,
  };
  return (
    <div>
      <div className="Container">
        <div className="scale">
          <h3 className="scale__title">Видеоблог</h3>
          <div className="scale__btn">Все видео</div>
        </div>
        <ProgressBar now={20} variant="info" className="Progress" />
        <Slider {...settingsMob}>
          {props.Video.map((e) => (
            <Video_mob img={e.img} />
          ))}
        </Slider>
      </div>
      <Slider {...params}>
        {props.Video.map((e) => (
          <Video_Cards img={e.img} />
        ))}
      </Slider>
    </div>
  );
}
