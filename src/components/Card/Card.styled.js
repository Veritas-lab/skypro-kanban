import styled from "styled-components";

const getThemeStyles = (theme, isDarkMode) => {
  const themes = {
    webdesign: {
      background: isDarkMode ? "#8B4513" : "#ffe4c2",
      color: isDarkMode ? "#ffa726" : "#ff6d00",
    },
    research: {
      background: isDarkMode ? "#1b5e20" : "#b4fdd1",
      color: isDarkMode ? "#4caf50" : "#06b16e",
    },
    copywriting: {
      background: isDarkMode ? "#4a148c" : "#e9d4ff",
      color: isDarkMode ? "#ba68c8" : "#9a48f1",
    },
  };

  return themes[theme] || themes.webdesign;
};

export const CardItem = styled.div`
  padding: 5px;
  animation: card-animation 500ms linear;
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: var(--background-secondary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-color);
  }

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: var(--background-secondary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div.attrs((props) => ({
  $isDarkMode: props.$isDarkMode || false,
  $theme: props.$theme || "webdesign",
}))`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) =>
    getThemeStyles(props.$theme, props.$isDarkMode).background};
  color: ${(props) => getThemeStyles(props.$theme, props.$isDarkMode).color};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardButton = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--text-secondary);
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--text-primary);
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
    path {
      stroke: var(--text-secondary);
    }
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: var(--text-secondary);
    letter-spacing: 0.2px;
  }
`;
