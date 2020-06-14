export default function Gallery_Cards(props) {
  return (
    <div className="gallery">
      <div className="gallery__cards">
        <img src={props.img} alt="gallery__img" className="gallery__img" />
        <h4 className="gallery__title">{props.title}</h4>
        <p className="gallery__text">{props.text}</p>
        <div className="row__line"></div>
        <div className="row__time">19.05.2020</div>
      </div>
    </div>
  );
}
