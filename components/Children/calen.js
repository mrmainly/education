export default function Calen_Cards(props) {
  return (
    <div className="calen">
      <div className="calendar__block">
        <div className="calen__cards">
          <img src={props.img} alt="calendar__img" className="calendar__img" />
          <h5 className="calen__title">{props.title}</h5>
          <p className="calen__text">{props.text}</p>
          <div className="row__line"></div>
          <div className="row__time">19.05.2020</div>
        </div>
      </div>
    </div>
  );
}
