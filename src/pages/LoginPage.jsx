import styled from "styled-components";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../services/api";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LoginInput = styled.input`
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

const LoginButton = styled.button`
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

const LoginDescription = styled.p`
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

export default function LoginPage({ setIsAuth }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Валидация полей
      if (!login.trim() || !password.trim()) {
        setError("Все поля обязательны для заполнения");
        return;
      }

      const userData = await signIn({ login, password });

      // Сохраняем данные пользователя в localStorage
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: userData.token,
          user: userData.user,
        })
      );

      setIsAuth(true);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Произошла ошибка при входе");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <GlobalStyles />
      <LoginForm onSubmit={handleSubmit}>
        <h2>Вход</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginInput
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          disabled={loading}
        />
        <LoginInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <LoginButton type="submit" disabled={loading}>
          {loading ? "Вход..." : "Войти"}
        </LoginButton>
        <LoginDescription>
          Нужно зарегистрироваться?{" "}
          <Link to="/register">Регистрируйтесь здесь</Link>
        </LoginDescription>
      </LoginForm>
    </LoginWrapper>
  );
}
