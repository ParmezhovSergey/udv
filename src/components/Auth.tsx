import styles from "../styles/Auth.module.css";
import logo from "../assets/icon/logo.png";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Navigate, NavLink } from "react-router-dom";
import users from '../assets/users/users.json'
import { stringify } from "querystring";
import { setAuth } from "./store/reducers/ActionCreators";

const Auth = () => {
  const dispatch = useAppDispatch();
  const { isAuth, error } = useAppSelector(state => state.authReducer);

  const [login, setLogin] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsSubmit(true);
	};
  const verification = users.login ===login && users.password === pass ? true : false;
  
  useEffect(()=>{
    if (isSubmit && login && pass) {
			if (verification) {
				dispatch(setAuth());
				setIsSubmit(false);
			} else {
				dispatch(setAuth('Введен неверный логин или пароль'));
				setIsSubmit(false);
			}
		}
  },[isSubmit]);

  if ( isAuth) {
		return <Navigate to='/udv' />
	}

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
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder={"логин: user1"}
        />
      
        <div className={styles.auth__form_loginText}>Пароль</div>
        <input
          className={styles.auth__form_passwordInput}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={"пароль: 123123"}
        />
          {
					error &&
					<div
						className={styles.error}
					>
						{
							error
						}
					</div>
				}
        <div>
          <button
            onClick={handleSubmit}
            
            className={styles.auth__form_btn}
          >
            {/* <NavLink to="/udv" style={{ color: "white" }}> */}
              Войти
            {/* </NavLink> */}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
