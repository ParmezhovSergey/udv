import styles from "../styles/Messages.module.css";
import logo from "../assets/icon/logo.png";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeAuth, setAuth } from "./store/reducers/ActionCreators";
import { addMessage, getUserMessage } from "./store/reducers/messageSlice";
import { useEffect, useState } from "react";

const Messages = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { user, isReqMessage } = useAppSelector((state) => state.messageSlice);
  const [textValue, setTextValue] = useState("");
  const { id } = useParams();

  const arrText = id && [...user].filter((a) => a.id === +id);

  const handleExit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeAuth());
  };
  const handleAction = () => {
    if (textValue.trim().length && id) {
      dispatch(addMessage({ textValue: textValue, id: +id }));
      setTextValue("");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    if (id && isReqMessage) {
      dispatch(getUserMessage(+id));
    }
  }, [user]);

  useEffect(() => {
    dispatch(setAuth());
  }, []);

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
        {arrText &&
          arrText.map((m: any) =>
            m.text.map((f: string) => (
              <div className={styles.text} key={f}>
                {f}
              </div>
            ))
          )}
      </div>
      <div className={styles.send}>
        <input
          className={styles.input}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
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
