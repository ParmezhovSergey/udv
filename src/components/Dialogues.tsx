import styles from "../styles/Dialogues.module.css";
import logo from "../assets/icon/logo.png";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeAuth, setAuth } from "./store/reducers/ActionCreators";
import { IUser } from "../models/User";
import UsersList from "./UsersList";
import { useEffect } from "react";
import { setUsersData } from "./store/reducers/messageSlice";

const Dialogues = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { user } = useAppSelector((state) => state.messageSlice);

  const handleExit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeAuth());
  };

  useEffect(() => {
    const dataUser = localStorage.getItem("user");

    if (dataUser) {
      const arrDataUser = JSON.parse(dataUser);
      console.log(arrDataUser);
      dispatch(setUsersData(JSON.parse(dataUser)));
    }
  }, []);

  useEffect(() => {
    dispatch(setAuth());
  }, []);

  const Users =
    user &&
    user.map((p: IUser) => (
      <UsersList key={p.id} id={p.id} name={p.name} text={p.text} />
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
      <div className={styles.list}>{Users}</div>
    </div>
  );
};

export default Dialogues;
