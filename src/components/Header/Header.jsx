import { useState } from "react";
import PopUser from "../Popups/PopUser";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButtonNew,
  HeaderUser,
} from "./Header.styled";

export default function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderLogo>
          <a href="" target="_self">
            <img src="../public/images/logo.png" alt="logo" />
          </a>
        </HeaderLogo>
        <HeaderNav>
          <HeaderButtonNew>
            <a href="#popNewCard">Создать новую задачу</a>
          </HeaderButtonNew>
          <HeaderUser
            href="#user-set-target"
            onClick={(e) => {
              e.preventDefault();
              toggleUserPopup();
            }}
          >
            Ivan Ivanov
          </HeaderUser>
          {isUserPopupOpen && <PopUser onClose={toggleUserPopup} />}
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrapper>
  );
}
