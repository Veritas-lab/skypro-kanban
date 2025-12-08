import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { postTask } from "../../services/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TasksContext } from "../../context/TasksContext";
import {
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  SPopNewCard,
  PopBrowseContainer,
  Subttl,
  Categories,
  CategoriesPSubttl,
  CategoriesTheme,
  CategoriesThemeP,
  CategoriesThemes,
  ErrorPB,
} from "./PopNewCard.styled";

const categories = [
  { name: "Web Design", background: "#ffe4c2", color: "#ff6d00" },
  { name: "Research", background: "#b4fdd1", color: "#06b16e" },
  { name: "Copywriting", background: "#e9d4ff", color: "#9a48f1" },
];

const PopNewCard = () => {
  const { setTasks } = useContext(TasksContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Research");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setFormData({ ...formData, topic: categoryName });
  };

  const handleDateSelect = (date) => {
    setFormData({ ...formData, date });
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Введите название задачи");
      return false;
    }

    if (!formData.description.trim()) {
      setError("Введите описание задачи");
      return false;
    }

    if (!formData.topic) {
      setError("Выберите категорию задачи");
      return false;
    }

    return true;
  };

  const addNewTask = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!user?.token) {
      setError("Пользователь не авторизован");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const newTask = {
        title: formData.title,
        description: formData.description,
        topic: formData.topic,
        status: formData.status,
        date: formData.date,
      };

      const newTasks = await postTask({
        token: user.token,
        task: newTask,
      });

      setTasks(newTasks);
      handleClose();
    } catch (error) {
      setError(`Ошибка добавления задачи: ${error.message}`);
      console.error("Ошибка при добавлении задачи:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <SPopNewCard>
      <PopBrowseContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose onClick={handleClose} aria-label="Закрыть">
              &#10006;
            </PopNewCardClose>

            <PopNewCardForm onSubmit={addNewTask}>
              <PopNewCardWrap>
                <div>
                  <FormNewBlock>
                    <Subttl>Название задачи</Subttl>
                    <FormNewInput
                      type="text"
                      name="title"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      value={formData.title}
                      onChange={handleChange}
                      autoFocus
                      required
                      disabled={loading}
                    />
                  </FormNewBlock>

                  <FormNewBlock>
                    <Subttl>Описание задачи</Subttl>
                    <FormNewArea
                      name="description"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </FormNewBlock>
                </div>

                <Calendar
                  selected={formData.date}
                  setSelected={handleDateSelect}
                  disabled={loading}
                />
              </PopNewCardWrap>

              <Categories>
                <CategoriesPSubttl>Категория</CategoriesPSubttl>
                <CategoriesThemes>
                  {categories.map((category) => (
                    <CategoriesTheme
                      key={category.name}
                      $background={category.background}
                      $isActive={selectedCategory === category.name}
                      onClick={() =>
                        !loading && handleCategoryClick(category.name)
                      }
                      title={category.name}
                    >
                      <CategoriesThemeP $color={category.color}>
                        {category.name}
                      </CategoriesThemeP>
                    </CategoriesTheme>
                  ))}
                </CategoriesThemes>
              </Categories>

              <ErrorPB>{error}</ErrorPB>

              <FormNewCreate type="submit" disabled={loading}>
                {loading ? "Создание..." : "Создать задачу"}
              </FormNewCreate>
            </PopNewCardForm>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopBrowseContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;
