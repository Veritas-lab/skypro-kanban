import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  HeaderBlock,
  HeaderWrapper,
  Logo,
  Navigation,
  UserButton,
  ThemeToggleButton,
  PopupExitContainer,
  PopupExitContent,
  PopupTitle,
  ButtonGroup,
  ConfirmButton,
  CancelButton,
} from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeProvider";

export default function Header({ onLogout }) {
  const { user } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const [showExitPopup, setShowExitPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowExitPopup(true);
  };

  const handleConfirmLogout = () => {
    onLogout();
    setShowExitPopup(false);
  };

  const handleCancelLogout = () => {
    setShowExitPopup(false);
  };

  return (
    <>
      <HeaderBlock>
        <div className="container">
          <HeaderWrapper>
            <Logo>Kanban</Logo>
            <Navigation>
              <ThemeToggleButton onClick={toggleTheme}>
                {isDarkMode ? "Светлая тема" : "Темная тема"}
              </ThemeToggleButton>
              <Link to="/new">
                <UserButton>Создать задачу</UserButton>
              </Link>
              <UserButton onClick={handleLogoutClick}>
                Выйти ({user?.name || user?.login})
              </UserButton>
            </Navigation>
          </HeaderWrapper>
        </div>
      </HeaderBlock>

      {showExitPopup && (
        <PopupExitContainer>
          <PopupExitContent>
            <PopupTitle>Вы действительно хотите выйти?</PopupTitle>
            <ButtonGroup>
              <ConfirmButton onClick={handleConfirmLogout}>
                Да, выйти
              </ConfirmButton>
              <CancelButton onClick={handleCancelLogout}>Отмена</CancelButton>
            </ButtonGroup>
          </PopupExitContent>
        </PopupExitContainer>
      )}
    </>
  );
}
