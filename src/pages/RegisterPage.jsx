import styled from "styled-components";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../services/api";

const RegisterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;

const RegisterForm = styled.form`
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RegisterInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #565eef;
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    background-color: #33399b;
  }

  &:disabled {
    background-color: #94a6be;
    cursor: not-allowed;
  }
`;

const RegisterDescription = styled.p`
  margin: 15px 0 0 0;
  color: #94a6be;
  font-size: 14px;

  a {
    color: #565eef;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin: 10px 0;
  padding: 8px;
  background-color: #ffe6e6;
  border-radius: 4px;
  border: 1px solid #ffcccc;
`;

const SuccessMessage = styled.div`
  color: #008000;
  font-size: 14px;
  margin: 10px 0;
  padding: 8px;
  background-color: #e6ffe6;
  border-radius: 4px;
  border: 1px solid #ccffcc;
`;

export default function RegisterPage({ setIsAuth }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Валидация полей
      if (!name.trim() || !login.trim() || !password.trim()) {
        setError("Все поля обязательны для заполнения");
        return;
      }

      if (password.length < 6) {
        setError("Пароль должен содержать минимум 6 символов");
        return;
      }

      const userData = await signUp({ name, login, password });

      // Сохраняем данные пользователя в localStorage
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: userData.token,
          user: userData.user,
        })
      );

      setSuccess("Регистрация прошла успешно! Вы будете перенаправлены...");

      // Задержка перед перенаправлением для отображения сообщения об успехе
      setTimeout(() => {
        setIsAuth(true);
        navigate("/", { replace: true });
      }, 1500);
    } catch (err) {
      setError(err.message || "Произошла ошибка при регистрации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterWrapper>
      <GlobalStyles />
      <RegisterForm onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <RegisterInput
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <RegisterInput
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          disabled={loading}
        />
        <RegisterInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <RegisterButton type="submit" disabled={loading}>
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </RegisterButton>
        <RegisterDescription>
          Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
        </RegisterDescription>
      </RegisterForm>
    </RegisterWrapper>
  );
}
