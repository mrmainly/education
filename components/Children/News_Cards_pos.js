import News_Cards from "./News_Cards";

export default function News_item_pos(props) {
  const mainArr = props.main;
  return (
    <div>
      <div className="row">
        {mainArr.map((e) => (
          <News_Cards
            text={e.description}
            title={e.title}
            img={e.img}
            post={e.author}
            id={e.id}
          />
        ))}
      </div>
    </div>
  );
}
