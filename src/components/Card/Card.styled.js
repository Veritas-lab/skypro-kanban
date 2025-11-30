import { keyframes } from "styled-components";
import styled from "styled-components";

const CardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation: ${CardAnimation} 500ms linear;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 150px; /* Увеличиваем высоту для статуса */
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const SCard = styled.div``;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $background }) => $background};
`;

export const CardThemeP = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $color }) => $color};
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const CardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const CardContent = styled.div`
  height: 80px; /* Увеличиваем высоту */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 8px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

/* Новые стили для селектора статуса */
export const StatusSelect = styled.select`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #94a6be;
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border-color: #4d5bf9;
  }
`;

export const StatusOption = styled.option`
  font-size: 12px;
  padding: 4px;
`;

export const StatusDisplay = styled.div`
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  border: 1px dashed #ccc;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #e0e0e0;
  }
`;
