// App.jsx
import { useState, useEffect } from "react";
import AppRoutes from "./components/AppRoutes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { fetchTasks } from "./services/api";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // Функция для загрузки задач с API
  const loadTasks = async () => {
    try {
      setLoading(true);
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo?.token) {
        const tasks = await fetchTasks({ token: userInfo.token });
        setCards(tasks);
      }
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
    } finally {
      setLoading(false);
    }
  };

  // Загружаем задачи при монтировании компонента
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo?.token) {
      loadTasks();
    }
  }, []);

  // Функция для добавления новой карточки
  const handleAddCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  // Функция для обновления списка карточек
  const handleUpdateCards = (updatedCards) => {
    setCards(updatedCards);
  };

  return (
    <>
      <GlobalStyles />
      <AppRoutes
        cards={cards}
        onAddCard={handleAddCard}
        onUpdateCards={handleUpdateCards}
        onLoadTasks={loadTasks}
        loading={loading}
      />
    </>
  );
}

export default App;
