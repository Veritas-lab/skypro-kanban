import {
  PopUserWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled";

export default function PopUser({ onClose }) {
  return (
    <PopUserWrapper id="user-set-target">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        x
      </a>
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <a href="#popExit">Выйти</a>
      </PopUserButton>
    </PopUserWrapper>
  );
}
