import {
  PopExitWrapper,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitButtonYes,
  PopExitButtonNo,
} from "./PopExit.styled";

export default function PopExit() {
  return (
    <PopExitWrapper id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitButtonYes className="_hover01" id="exitYes">
              <a href="modal/signin.html">Да, выйти</a>
            </PopExitButtonYes>
            <PopExitButtonNo className="_hover03" id="exitNo">
              <a href="main.html">Нет, остаться</a>
            </PopExitButtonNo>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
}
