import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.headerBg};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  transition: all 0.3s ease;
`;

export const SContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  width: 85px;
`;

export const Img = styled.img`
  width: 85px;
`;

export const ShowLight = styled.div`
  display: ${(props) => (props.theme.isDark ? "none" : "block")};
`;

export const Dark = styled.div`
  display: ${(props) => (props.theme.isDark ? "block" : "none")};
`;

export const HeaderNav = styled.div`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.primaryColor};
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${(props) => props.theme.primaryColor};
    border-bottom: 1.9px solid ${(props) => props.theme.primaryColor};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover::after {
    border-left-color: ${(props) => props.theme.primaryHover};
    border-bottom-color: ${(props) => props.theme.primaryHover};
  }
`;

/* Новые стили для переключателя темы */
export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.toggleHoverBg};
  }
`;

export const ThemeToggleIcon = styled.span`
  font-size: 18px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isDark ? "rotate(180deg)" : "rotate(0)")};
`;
