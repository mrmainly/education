import News_Cards from "./News_Cards";
import { ProgressBar } from "react-bootstrap";
export default function News(props) {
  return (
    <div className="Container">
      <div className="scale">
        <h3 className="scale__title">Главные новости</h3>
        <div className="scale__btn">все новости</div>
      </div>
      <ProgressBar now={20} variant="info" className="Progress" />
      <div className="row">
        {props.postList.map((e) => (
          <News_Cards text={e.description} title={e.title} img={e.img} />
        ))}
      </div>
      <style>{`
.Container {
    padding: 0px 35px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    min-width: 1100px;
    margin-top: 40px;
}
.scale__line-white {
    text-decoration: none;
    width: 13%;
    height: 8px;
    background-color: #0070B8;
    color: rgba(0, 0, 0, 0.6);
}

.scale__line-blue {
    text-decoration: none;
    width: 100%;
    height: 8px;
    background-color:  #EDEDED;
    color: rgba(0, 0, 0, 0.6);
}

.scale {
    display: flex;
    justify-content: space-between;
}

.scale__btn {
    display: flex;
    align-items: center;
    height: 22px;
    margin-top: 19px;
    background-color: rgba(196, 196, 196, 0.8);
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.5);
   
}

.row {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    margin-left: 18px;
    flex-direction: row;
}
.row__block {
    min-width: 200px;
    max-width: 340px;
}
.row__img{
    width: 90%;
    height: 180px;
}


@media (max-width: 600px) {
    .row__block {
        width: 100%;
        max-width: none;
        margin-top: 10px;
    }
}

@media (max-width: 600px) {
    .row {
        flex-direction: column;
    }
}
.row__title {
    margin-top: 10px;
}

@media (max-width: 600px) {
    .row__img {
        width: 970px;
        height: 400px;
    }
}

@media (max-width: 600px) {
    .row__title {
        font-size: 50px;
        margin-top: -1px;
    }
}

.row__text{
    width: 90%;
    margin-top: 10px;
}

@media (max-width: 600px) {
    .row__text  {
        position: absolute;
        opacity: 0;
    }
}

.row__line {
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 90%;
}

@media (max-width: 600px) {
    .row__line  {
        width: 970px;
    }
}

.row__time {
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 600px) {
    .scale__btn {
        margin-top: 2.8%;
        height: 50px;
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
}

@media (max-width: 600px) {
    .row__time {
        font-size: 30px;
    }
}`}</style>
    </div>
  );
}
