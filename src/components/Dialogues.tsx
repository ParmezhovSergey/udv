import styles from "../styles/Dialogues.module.css";
import logo from "../assets/icon/logo.png";
import gamer from "../assets/icon/gamer.png";
import hacker from "../assets/icon/hacker.png";
import user from "../assets/icon/user.png";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeAuth } from "./store/reducers/ActionCreators";
import { getUserMessage } from "./store/reducers/messageSlice";
import { IUser } from "../models/User";
import UsersList from "./UsersList";

const Dialogues = () => {
  const dispatch = useAppDispatch();
  const { isAuth, error } = useAppSelector((state) => state.authReducer);
  const { user } = useAppSelector((state) => state.messageSlice);

  const handleExit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeAuth());
  };

  const Users = user.map((p: IUser) => (
    <UsersList key={p.id} id={p.id} name={p.name} />
  ));

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className={styles.dialogues}>
      <div className={styles.header}>
        <div>
          <img className={styles.logo} src={logo} />
        </div>
        <button className={styles.exit} onClick={handleExit}>
          Выйти
        </button>
      </div>
      <div className={styles.list}>{<div>{Users}</div>}</div>
    </div>
  );
};

export default Dialogues;
