import styles from "../styles/Dialogues.module.css";
import logo from "../assets/icon/logo.png";
import gamer from "../assets/icon/gamer.png";
import hacker from "../assets/icon/hacker.png";
import user from "../assets/icon/user.png";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeAuth, setAuth } from "./store/reducers/ActionCreators";
import { IUser } from "../models/User";
import UsersList from "./UsersList";
import { useEffect, useState } from "react";

const Dialogues = () => {
  const dispatch = useAppDispatch();
  const { isAuth, error } = useAppSelector((state) => state.authReducer);
  const { user } = useAppSelector((state) => state.messageSlice);
  const  [userData, setUserData]=useState<IUser[]>()

  
  //   const [items, setItems] = useState(user);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);
  //localStorage.setItem("user", JSON.stringify(user));

  const handleExit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeAuth());
  };

  // const data = dataUser && dataUser.length ? JSON.parse(dataUser) : user;
  
  

  useEffect(() => {
    const dataUser = localStorage.getItem("user");
    
    if (dataUser) {
      setUserData(JSON.parse(dataUser))
    }  else {
      setUserData(user)
    }
  }, [user]);

  useEffect(() => {
    dispatch(setAuth());
  }, []);

  const Users = userData && userData.map((p: IUser) => (
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
