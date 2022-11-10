import styles from "../styles/Dialogues.module.css";
import gamer from "../assets/icon/gamer.png";
import { useDispatch } from "react-redux";
import { IUser } from "../models/User";
import { getUserMessage } from "./store/reducers/messageSlice";
import { useAppSelector } from "../hooks/redux";
import { produceWithPatches } from "immer";

const UsersList: React.FC<IUser> = ({ name, id }) => {
  const dispatch = useDispatch();
  const { message } = useAppSelector((state) => state.messageSlice);

  const handleMessage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(getUserMessage(id));
  };

  return (
    <button onClick={handleMessage} className={styles.user}>
      <img className={styles.gamer} src={gamer} />

      {name}
      
    </button>
  );
};

export default UsersList;
