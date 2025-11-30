import styled from "styled-components";

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FWrapper = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.cardBg};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.shadow};
`;

export const FTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
`;

export const FormGroupP = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.textSecondary};
  letter-spacing: -1%;
  text-align: center;
`;

export const FormGroupPLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.primaryColor};
  letter-spacing: -1%;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }
`;
