import styled from "styled-components";

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.cardBg};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserSetName = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetmail = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const PopUserSetThemeP = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${(props) => props.theme.backgroundColor};
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.textSecondary};
    transition: 0.5s;
  }

  &:checked[type="checkbox"]::before {
    left: 12px;
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export const PopUserSetButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
    color: #ffffff;
  }
`;

export const PopUserSetA = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;

  &:hover {
    color: #ffffff;
  }
`;
