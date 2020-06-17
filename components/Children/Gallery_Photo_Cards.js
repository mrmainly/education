export default function Gallery_Photo_Cards(props) {
  return (
    <div className="gallery">
      <div className="gallery__cards">
        <img src={props.img} alt="gallery__img" className="gallery__img" />
      </div>
    </div>
  );
}
