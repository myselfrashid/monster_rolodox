import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="container">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
