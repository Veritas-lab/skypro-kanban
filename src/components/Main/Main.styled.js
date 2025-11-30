import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: calc(100vh - 70px);
  transition: background-color 0.3s ease;
`;

export const MainBlock = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
