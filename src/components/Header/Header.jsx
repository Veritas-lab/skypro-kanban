import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PopUser from "../PopUser/PopUser";
import {
  Dark,
  SHeader,
  SContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  Img,
  HeaderUser,
  ThemeToggle,
  ThemeToggleIcon,
  ShowLight,
} from "./Header.styled";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Если пользователя нет, не рендерим хедер
  if (!user) {
    return null;
  }

  return (
    <SHeader>
      <SContainer>
        <HeaderBlock>
          {/* Логотип для светлой темы */}
          <ShowLight>
            <HeaderLogo>
              <a href="" target="_self">
                <Img src="../images/logo.png" alt="logo" />
              </a>
            </HeaderLogo>
          </ShowLight>

          {/* Логотип для темной темы */}
          <Dark>
            <HeaderLogo>
              <a href="" target="_self">
                <Img src="../images/logo_dark.png" alt="logo" />
              </a>
            </HeaderLogo>
          </Dark>

          <HeaderNav>
            {/* Переключатель темы */}
            <ThemeToggle onClick={toggleTheme}>
              <ThemeToggleIcon $isDark={isDarkTheme}>
                {isDarkTheme ? "🌙" : "☀️"}
              </ThemeToggleIcon>
            </ThemeToggle>

            <Link to="/card/add">
              <Button text="Создать новую задачу" />
            </Link>
            <HeaderUser onClick={toggleModal}>{user.name}</HeaderUser>
            {isModalOpen && <PopUser onClose={toggleModal} />}
          </HeaderNav>
        </HeaderBlock>
      </SContainer>
    </SHeader>
  );
};

export default Header;
