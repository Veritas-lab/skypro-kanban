// Header.styled.js
import styled from "styled-components";

export const HeaderBlock = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: var(--background-secondary);
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-tertiary);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserButton = styled.button`
  background: var(--text-tertiary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--hover-primary);
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--background-tertiary);
  }
`;

export const PopupExitContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupExitContent = styled.div`
  background: var(--background-secondary);
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px var(--shadow-color);
`;

export const PopupTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  background: var(--text-tertiary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: var(--hover-primary);
  }
`;

export const CancelButton = styled.button`
  background: var(--background-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: var(--border-color);
  }
`;
