// MainPage.jsx
import Column from "../components/Column/Column";
import { cardList } from "../data";
import { useState, useEffect } from "react";
import {
  MainWrapper,
  MainBlock,
  MainContent,
  LoadingContainer,
} from "../components/Main/Main.styled";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line no-empty-pattern
export default function MainPage({}) {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList);

  // Загрузка карточек из localStorage при монтировании
  useEffect(() => {
    const savedCards = localStorage.getItem("userCards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
    setIsLoading(false);
  }, []);

  // Сохранение карточек в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("userCards", JSON.stringify(cards));
  }, [cards]);

  // Функция для добавления новой карточки
  const handleAddCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <>
      <MainWrapper className="main">
        <div className="container">
          <MainBlock>
            {isLoading ? (
              <LoadingContainer>Данные загружаются...</LoadingContainer>
            ) : (
              <MainContent>
                {statuses.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cards={cards.filter((card) => card.status === status)}
                  />
                ))}
              </MainContent>
            )}
          </MainBlock>
        </div>
      </MainWrapper>
      <Outlet context={{ onAddCard: handleAddCard }} />
    </>
  );
}
