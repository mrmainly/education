export default function Gallen_mob(props) {
  return (
    <div className="calen">
      <div className="calendar__block">
        <div className="calen__cards">
          <img src={props.img} alt="calendar__img" className="calendar__img" />
          <div className="row__line"></div>
          <div className="row__time">19.05.2020</div>
        </div>
      </div>
    </div>
  );
}
