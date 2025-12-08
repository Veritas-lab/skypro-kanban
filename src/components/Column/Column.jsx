import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

export default function Column({ title, cards }) {
  const filteredCards = cards.filter((card) => card.status === title);

  return (
    <ColumnWrapper className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {filteredCards.map((card) => (
          <Card key={card._id} cardData={card} />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}
import { useContext } from "react";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import { Cards, ColumnTitle, MainColumn, PTitle } from "./Column.styled";
import { TasksContext } from "../../context/TasksContext";

const Column = ({ title }) => {
  const { tasks, loading } = useContext(TasksContext);
  return (
    <MainColumn>
      <ColumnTitle>
        <PTitle>{title}</PTitle>
      </ColumnTitle>
      <Cards>
        {tasks
          .filter((card) => card.status === title)
          .map((card) =>
            loading ? (
              <CardLoader key={card._id} />
            ) : (
              <Card card={card} key={card._id} />
            )
          )}
      </Cards>
    </MainColumn>
  );
};

export default Column;