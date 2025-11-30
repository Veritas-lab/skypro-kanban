import styled from "styled-components";

export const SPopExit = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.cardBg};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.shadow};

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const PopExitTtl = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitH = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const PopExitForm = styled.form``;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const PopExitButtonY = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const PopExitAY = styled.p`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopExitButtonN = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${(props) => props.theme.primaryColor};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
    color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;

export const PopExitAN = styled.p`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ffffff;
  }
`;
