import Gallery_Photo_Cards from "./Gallery_Photo_Cards";
import { ProgressBar } from "react-bootstrap";
import Swiper from "react-id-swiper";
import Slider from "react-slick";
import Gallen_mob from "./Gallen_mob";
export default function Gallery_Photo(props) {
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
          <h3 className="scale__title">Фотогалерея</h3>
          <div className="scale__btn">Вся галерея</div>
        </div>
        <ProgressBar now={20} variant="info" className="Progress" />
        <Slider {...settingsMob}>
          {props.Galler.map((e) => (
            <Gallen_mob img={e.img} />
          ))}
        </Slider>
      </div>
      <Slider {...params}>
        {props.Galler.map((e) => (
          <Gallery_Photo_Cards img={e.img} />
        ))}
      </Slider>
    </div>
  );
}
