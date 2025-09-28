import { useOutletContext } from "react-router-dom";
import PopNewCard from "../components/Popups/PopNewCard";

export default function PopNewCardPage() {
  const context = useOutletContext();

  if (!context) {
    return <div>Ошибка: контекст не найден</div>;
  }

  const { onAddCard } = context;

  return <PopNewCard onAddCard={onAddCard} />;
}
