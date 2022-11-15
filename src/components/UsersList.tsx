import styles from "../styles/Dialogues.module.css";
import gamer from "../assets/icon/gamer.png";
import { IUser } from "../models/User";
import { NavLink } from "react-router-dom";

const UsersList: React.FC<IUser> = ({ name,id }) => {
  return (
    <NavLink to={`/message/${id}/${name}`} className={styles.user}>
      <img className={styles.gamer} src={gamer} />

      {name}
    
    </NavLink>
 
    
  );
};

export default UsersList;
