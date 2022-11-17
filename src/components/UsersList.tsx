import styles from "../styles/Dialogues.module.css";
import hacker from "../assets/icon/hacker.png";
import { IUser } from "../models/User";
import { NavLink } from "react-router-dom";

const UsersList: React.FC<IUser> = ({ name, id }) => {
  return (
    <NavLink to={`/message/${id}/${name}`} className={styles.user}>
      <img className={styles.gamer} src={hacker} />
<div className={styles.name}>
{name}
</div>
      
    </NavLink>
  );
};

export default UsersList;
