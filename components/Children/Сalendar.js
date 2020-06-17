import Calendar_Cards from "./Сalendar_Cards";
import { ProgressBar } from "react-bootstrap";
export default function Calendar(props) {
  return (
    <div className="Container">
      <div className="scale">
        <h3 className="scale__title">Календарь событий</h3>
        <div className="scale__btn">все новости</div>
      </div>
      <ProgressBar now={20} variant="info" />
      <div className="row">
        {props.postList.map((e) => (
          <Calendar_Cards text={e.description} title={e.title} img={e.img} />
        ))}
      </div>
      <style>
        {`
        .row {
            display: flex;
            margin-top: 30px;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
        }
        .calendar__cards {
            min-width: 110px;
            max-width: 210px;
        }
        
        .calendar__img{
            width: 90%;
            height: 110px;
            margin-top: 15px;
        }
        
        .calendar__title {
            color: #0070B8;
        }
        
        .calendar__text {
            width: 90%;
            font-size: 12px;
        }
        
        @media (max-width: 600px) {
            .calendar__img {
                width: 970px;
                height: 400px;
            }
        }
        @media (max-width: 600px) {
            .calendar__title {
                font-size: 50px;
                margin-top: -1px;
            }
        }
        
        @media (max-width: 600px) {
            .calendar__text  {
                position: absolute;
                opacity: 0;
            }
        }
        
        @media (max-width: 600px) {
            .calendar__cards {
                width: 100%;
                max-width: none;
                margin-top: 10px;
            }
        }
        
        @media (max-width: 600px) {
            .scale__title{
                font-size: 30px;
            }
        }`}
      </style>
    </div>
  );
}
