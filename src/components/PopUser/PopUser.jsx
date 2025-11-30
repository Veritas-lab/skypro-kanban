import { Link } from "react-router-dom";
import {
  Checkbox,
  HeaderPopUserSet,
  PopUserSetA,
  PopUserSetButton,
  PopUserSetmail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeP,
} from "./PopUser.styled";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const PopUser = ({ onClose }) => {
  const { user } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useTheme();
  const popupRef = useRef(null);

  // Закрытие попапа при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <HeaderPopUserSet ref={popupRef}>
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetmail>{user.login}</PopUserSetmail>
      <PopUserSetTheme>
        <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
        <Checkbox
          type="checkbox"
          name="checkbox"
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
      </PopUserSetTheme>
      <Link to="/exit" onClick={onClose}>
        <PopUserSetButton type="button">
          <PopUserSetA>Выйти</PopUserSetA>
        </PopUserSetButton>
      </Link>
    </HeaderPopUserSet>
  );
};

export default PopUser;
