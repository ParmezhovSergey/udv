import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/User";

interface AuthState {
  user: IUser[];
  isAuth: boolean;
  error: string;
  nameToken: string;
}

const initialState: AuthState = {
  user: [],
  isAuth: false,
  error: "",
  nameToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
  },
});

export default authSlice.reducer;
