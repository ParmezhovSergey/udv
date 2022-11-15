import styles from "../styles/Dialogues.module.css";
import gamer from "../assets/icon/gamer.png";
import { useDispatch } from "react-redux";
import {  IUser } from "../models/User";
import { useAppSelector } from "../hooks/redux";
import { NavLink } from "react-router-dom";

const TextUser: React.FC<IUser> = ({  text }) => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.messageSlice);

  return <div>{text}</div>;
};

export default TextUser;
