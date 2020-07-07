import Calendar_Cards from "./Сalendar_Cards";
import { ProgressBar } from "react-bootstrap";
import Calen_Cards from "./calen";
import { Carousel } from "react-bootstrap";
export default function Calendar(props) {
  const calenArray = props.Calen;

  return (
    <div className="Container">
      <div className="scale">
        <h3 className="scale__title">Календарь событий</h3>
        <div className="scale__btn">Все новости</div>
      </div>
      <ProgressBar now={20} variant="info" className="Progress" />
      <div className="row">
        {calenArray.map((e) => (
          <Calendar_Cards text={e.description} title={e.title} img={e.img} />
        ))}
      </div>

      <div className="column">
        {calenArray.map((e) => (
          <Carousel>
            <Calen_Cards title={e.title} text={e.description} img={e.img} />
          </Carousel>
        ))}
      </div>
    </div>
  );
}
