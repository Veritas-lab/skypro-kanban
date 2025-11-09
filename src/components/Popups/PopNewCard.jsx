import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar";

export default function PopNewCard({ onAddCard }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Web Design");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Пожалуйста, введите название задачи");
      return;
    }

    const newCard = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      topic: selectedCategory,
      date: selectedDate || new Date().toLocaleDateString("ru-RU"),
      status: "Без статуса",
      createdAt: new Date().toISOString(),
    };

    // Вызываем функцию для добавления карточки
    if (onAddCard) {
      onAddCard(newCard);
    }

    // Возвращаемся на главную страницу
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a
              href="#"
              className="pop-new-card__close"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div
                      className={`categories__theme _web-design ${
                        selectedCategory === "Web Design"
                          ? "_active-category"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick("Web Design")}
                    >
                      <p className="_web-design">Web Design</p>
                    </div>
                    <div
                      className={`categories__theme _research ${
                        selectedCategory === "Research"
                          ? "_active-category"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick("Research")}
                    >
                      <p className="_research">Research</p>
                    </div>
                    <div
                      className={`categories__theme _copywriting ${
                        selectedCategory === "Copywriting"
                          ? "_active-category"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick("Copywriting")}
                    >
                      <p className="_copywriting">Copywriting</p>
                    </div>
                  </div>
                </div>

                <button className="form-new__create _btn-bg" type="submit">
                  Создать задачу
                </button>
              </form>
              <Calendar onDateSelect={handleDateSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
