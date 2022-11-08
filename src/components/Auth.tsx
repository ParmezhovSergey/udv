import styles from "../styles/Auth.module.css";
import logo from "../assets/icon/logo.png";

const Auth = () => {
  return (
    
    <div className={styles.auth}>
      <div className={styles.auth__logo}>
        <img className={styles.logo} src={logo} />
      </div>
      <div className={styles.text}> Вход</div>
      <form className={styles.auth__form}>
        <div className={styles.auth__form_loginText}>Логин</div>
        <input
          className={styles.auth__form_loginInput}
          type="text"
          name="login"
          //value={loginPayload.login}
          //onChange={handleChange}
          placeholder={"логин: user1"}
        />
        <div className={styles.auth__form_loginText}>Пароль</div>
        <input
          className={styles.auth__form_passwordInput}
          //type={!isActivePass ? "password" : "text"}
          name="password"
          //	value={loginPayload.password}
          //	onChange={handleChange}
          placeholder={"пароль: 123123"}
        />
        <div>
          <button
            //onClick={handleSubmit}
            className={styles.auth__form_btn}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
