export default function News_item(props) {
  return (
    <div>
      <div className="row__block">
        <img className="row__img" src={props.img} alt="qwdqdw" />
        <h3 className="row__title">{props.title}</h3>
        <p className="row__text">{props.text}</p>
        <div className="row__line"></div>
        <div className="row__time">19.05.2020</div>
      </div>
    </div>
  );
}
