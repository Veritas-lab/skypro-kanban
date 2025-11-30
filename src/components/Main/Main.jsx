import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import Column from "../Column/Column";
import { SContainer } from "../Header/Header.styled";
import { SMain, MainBlock, MainContent } from "./Main.styled";

const defaultColumnTitles = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  const { tasks, loading, setTasks } = useContext(TasksContext);

  // Функция для обработки изменения статуса
  const handleStatusChange = (cardId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task._id === cardId ? { ...task, status: newStatus } : task
    );

    setTasks(updatedTasks);

    // Здесь можно добавить API запрос для сохранения изменений на сервере
    // updateTaskStatus(cardId, newStatus);
  };

  // Функция для обработки перетаскивания
  const handleDrop = (e, targetColumn) => {
    const cardId = e.dataTransfer.getData("cardId");
    const fromColumn = e.dataTransfer.getData("fromColumn");

    if (fromColumn === targetColumn) return;

    handleStatusChange(cardId, targetColumn);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <SMain>
      <SContainer>
        <MainBlock>
          <MainContent>
            {defaultColumnTitles.map((title, index) => {
              const filteredTasks = Array.isArray(tasks)
                ? tasks.filter((task) => task.status === title)
                : [];

              return (
                <Column
                  key={index}
                  title={title}
                  tasks={filteredTasks}
                  loading={loading}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onStatusChange={handleStatusChange}
                />
              );
            })}
          </MainContent>
        </MainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;
