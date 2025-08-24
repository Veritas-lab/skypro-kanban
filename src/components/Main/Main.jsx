import {
  MainWrapper,
  MainBlock,
  MainContent,
  LoadingContainer,
} from "./Main.styled";
import Column from "../Column/Column.jsx";
import { cardList } from "../../data";
import { useState, useEffect } from "react";

export default function Main() {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainWrapper>
      <MainBlock>
        {isLoading ? (
          <LoadingContainer>Данные загружаются...</LoadingContainer>
        ) : (
          statuses.map((status) => (
            <Column
              key={status}
              title={status}
              cards={cardList.filter((card) => card.status === status)}
            />
          ))
        )}
      </MainBlock>
    </MainWrapper>
  );
}
