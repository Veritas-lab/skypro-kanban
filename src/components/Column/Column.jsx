import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";
import Card from "../Card/Card.jsx";

export default function Column({ title, cards }) {
  const filteredCards = cards.filter((card) => card.status === title);

  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {filteredCards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}
