import Gallery_Cards from "./Gallery_Cards";

export default function Gallery(props) {
  return (
    <div className="Container">
      <div className="scale">
        <h3 className="scale__title">Главные новости</h3>
        <div className="scale__btn">все новости</div>
      </div>
      <div className="scale__line-blue">
        <div className="scale__line-white" />
      </div>
      <div className="row">
        {props.postList.map((e) => (
          <Gallery_Cards text={e.description} title={e.title} img={e.img} />
        ))}
      </div>
      <style>
        {`
        .row {
            display: flex;
            margin-top: 30px;
            justify-content: space-between;
            flex-direction: row;
        }
        .gallery__cards {
            min-width: 201px;
            max-width: 250px;
        }
        
        .gallery__img{
            width: 90%;
            height: 110px;
           
        }
        
        .gallery__title {
            color: #0070B8;
        }
        
        .gallery__text {
            width: 90%;
        }
        
        @media (max-width: 600px) {
            .gallery__img {
                width: 970px;
                height: 400px;
            }
        }
        @media (max-width: 600px) {
            .gallery__title {
                font-size: 50px;
                margin-top: -1px;
            }
        }
        
        @media (max-width: 600px) {
            .galllery__text  {
                position: absolute;
                opacity: 0;
            }
        }
        
        @media (max-width: 600px) {
            .gallery__cards {
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
