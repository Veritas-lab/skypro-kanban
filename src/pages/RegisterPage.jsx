import styled from "styled-components";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { Link, useNavigate } from "react-router-dom";

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
  max-height: 345px;
  padding: 50px 60px 50px 60px;
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
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;
const RegisterDescription = styled.p`
  margin: 10px 0;
  color: #94a6be66;
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <RegisterWrapper>
      <GlobalStyles />
      <RegisterForm onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <RegisterInput type="text" placeholder="Логин" />
        <RegisterInput type="email" placeholder="Email" />
        <RegisterInput type="password" placeholder="Пароль" />
        <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
        <RegisterDescription>
          Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
        </RegisterDescription>
      </RegisterForm>
    </RegisterWrapper>
  );
}
