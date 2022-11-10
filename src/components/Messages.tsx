import styles from "../styles/Messages.module.css";
import logo from "../assets/icon/logo.png";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeAuth } from "./store/reducers/ActionCreators";
import { addMessage } from "./store/reducers/messageSlice";
import { useState } from "react";

const Messages = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { message } = useAppSelector((state) => state.messageSlice);
  const [text, setText] = useState<string>("");

  const handleExit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeAuth());
  };
  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addMessage({ text }));
      setText("");
    }
  };

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className={styles.dialogues}>
      <div className={styles.header}>
        <div>
          <img className={styles.logo} src={logo} />
        </div>
        <button onClick={handleExit} className={styles.exit}>
          Выйти
        </button>
      </div>
      <div className={styles.back}>
        <NavLink to="/udv" style={{ color: "white" }}>
          Назад
        </NavLink>
      </div>
      <div className={styles.list}>
        {message.map((m: any) => (
          <div>{m.text}</div>
        ))}
      </div>
      <div className={styles.send}>
        <input
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"Введите сообщение"}
        />
        <button className={styles.sendMessage} onClick={handleAction}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Messages;
