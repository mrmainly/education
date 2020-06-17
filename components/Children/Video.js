import Video_Cards from "./Video_Cards";
import { ProgressBar } from "react-bootstrap";

export default function Video(props) {
  return (
    <div className="Gallery-main">
      <div className="Container">
        <div className="scale">
          <h3 className="scale__title">Видеоблог</h3>
          <div className="scale__btn">все видео</div>
        </div>

        <ProgressBar now={20} variant="info" />
      </div>
      <div className="container-gallery">
        <div className="gallery__row">
          {props.postList.map((e) => (
            <Video_Cards img={e.img} />
          ))}
        </div>
      </div>
      <style>{`
        .container-gallery {
            margin: 0px auto;
            display: flex;
            max-width: 1300px;
            min-width: 1100px;
        }
        .Gallery-main {
            margin-top: 100px;
        }
        .gallery__row {
            display: flex;
            margin-top: 30px;
            overflow: hidden;
            flex-direction: row;
        }
        .gallery__img {
            width: 90%;
            height: 160px;
            margin-top: 15px;
        }
        .scale-gallery {
            justify-content: space-between;
            margin: 0px auto;
            display: flex;
            max-width: 1200px;
            min-width: 1100px;
        }
        .gallery__cards {
          min-width: 300px;
          max-width: 340px;
        }
        `}</style>
    </div>
  );
}
