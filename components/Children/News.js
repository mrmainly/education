import News_Cards from "./News_Cards";
import { ProgressBar } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function News(props) {
  const NewsArr = props.News;
  return (
    <div className="Container">
      <div className="scale">
        <h3 className="scale__title">Главные новости</h3>
        <div className="scale__btn">Все новости</div>
      </div>
      <ProgressBar now={20} variant="info" className="Progress" />
      <div className="row">
        {NewsArr.map((e) => (
          <News_Cards
            text={e.description}
            title={e.title}
            img={e.img}
            post={e.author}
            id={e.id}
          />
        ))}
      </div>
      <div className="icons-style">
        <AiOutlineArrowLeft className="arrow" />
        <AiOutlineArrowRight className="arrow" />
      </div>
    </div>
  );
}
