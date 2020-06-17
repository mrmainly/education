export default function Calendar_Cards(props) {
  return (
    <div className="calendar">
      <div className="calendar__cards">
        <img src={props.img} alt="calendar__img" className="calendar__img" />
        <h5 className="calendar__title">{props.title}</h5>
        <p className="calendar__text">{props.text}</p>
        <div className="row__line"></div>
        <div className="row__time">19.05.2020</div>
      </div>
    </div>
  );
}
