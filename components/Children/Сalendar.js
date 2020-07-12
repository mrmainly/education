import Calendar_Cards from "./Сalendar_Cards";
import { ProgressBar } from "react-bootstrap";
import Calen_Cards from "./calen";
import Slick from "react-slick";

export default function Calendar(props) {
  const calenArray = props.Calen;
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 500,
  };
  const settingsMob = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 500,
  };
  return (
    <div className="Container">
      <div className="scale">
        <h3 className="scale__title">Календарь событий</h3>
        <div className="scale__btn">Все новости</div>
      </div>
      <ProgressBar now={20} variant="info" className="Progress" />

      <Slick {...settings}>
        {calenArray.map((e) => (
          <Calendar_Cards text={e.description} title={e.title} img={e.img} />
        ))}
      </Slick>

      <Slick {...settingsMob}>
        {calenArray.map((e) => (
          <Calen_Cards title={e.title} text={e.description} img={e.img} />
        ))}
      </Slick>
    </div>
  );
}
