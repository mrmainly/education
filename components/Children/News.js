import News_Cards from "./News_Cards";
import { ProgressBar } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import News_pos from "./News_Cards_pos";
import Slider from "react-slick";
export default function News(props) {
  const NewsArr = props.News;
  const params = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 500,
  };
  return (
    <div className="news_Container">
      <div className="scale">
        <h3 className="scale__title">Главные новости</h3>
        <div className="scale__btn">Все новости</div>
      </div>
      <div>
        <ProgressBar now={20} variant="info" className="Progress" />
      </div>
      <Slider {...params}>
        {NewsArr.map((e) => (
          <News_pos main={NewsArr} />
        ))}
      </Slider>
      <div className="icons-style">
        <AiOutlineArrowLeft className="arrow" />
        <AiOutlineArrowRight className="arrow" />
      </div>
    </div>
  );
}
