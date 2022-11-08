import styles from "../styles/Dialogues.module.css";
import logo from "../assets/icon/logo.png";
import gamer from "../assets/icon/gamer.png";
import hacker from "../assets/icon/hacker.png";
import user from "../assets/icon/user.png";


const Dialogues = () => {
  return (
    <div className={styles.dialogues}>
      <div className={styles.header}>
        <div>
          <img className={styles.logo} src={logo} />
        </div>
        <button className={styles.exit}>Выход</button>
      </div>
      <div className={styles.list}>
        <button className={styles.user}> <img className={styles.gamer} src={gamer} />Andrew</button>
        <button className={styles.user}> <img className={styles.gamer} src={hacker} />Oleg</button>
        <button className={styles.user}> <img className={styles.gamer} src={user} />Anna</button>
      </div>

    </div>
  );
};

export default Dialogues;
