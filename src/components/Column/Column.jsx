import { useContext } from "react";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import { Cards, ColumnTitle, MainColumn, PTitle } from "./Column.styled";
import { TasksContext } from "../../context/TasksContext";
import { CalendarDateEnd } from "../Calendar/Calendar.styled";

const Column = ({ title, loading, filteredTasks, onDrop, onDragOver }) => {
  const { tasks } = useContext(TasksContext);
  filteredTasks = Array.isArray(tasks)
    ? tasks.filter((card) => card.status === title)
    : [];

  const handleDragOver = (e) => {
    e.preventDefault();
    if (onDragOver) onDragOver(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (onDrop) onDrop(e, title);
  };

  return (
    <MainColumn onDragOver={handleDragOver} onDrop={handleDrop}>
      <ColumnTitle>
        <PTitle>{title}</PTitle>
      </ColumnTitle>
      <Cards>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CardLoader key={`loader-${index}`} />
          ))
        ) : filteredTasks.length > 0 ? (
          filteredTasks.map((card) => (
            <Card
              card={card}
              key={card._id}
              onDragStart={(e) => {
                e.dataTransfer.setData("cardId", card._id);
                e.dataTransfer.setData("fromColumn", card.status);
              }}
            />
          ))
        ) : (
          <CalendarDateEnd>Нет задач</CalendarDateEnd>
        )}
      </Cards>
    </MainColumn>
  );
};

export default Column;
