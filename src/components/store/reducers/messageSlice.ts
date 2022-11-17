import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/User";

export interface MessageState {
  user: IUser[];
  isReqMessage: boolean;
}

const initialState: MessageState = {
  user: [
    {
      id: 0,
      name: "Andrew",
      text: [],
    },
    {
      id: 1,
      name: "Oleg",
      text: [],
    },
    {
      id: 2,
      name: "Anna",
      text: [],
    },
  ],
  isReqMessage: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setUsersData(state, action: PayloadAction<IUser[]>) {
      state.user = action.payload;
    },
    addMessage(
      state,
      action: PayloadAction<{ textValue: string; id: number }>
    ) {
      state.user = [
        ...state.user.map((s: any) => {
          if (s.id === action.payload.id) {
            return { ...s, text: [...s.text, action.payload.textValue] };
          }
          return s;
        }),
      ];
    },
    getUserMessage(state, action: PayloadAction<number>) {
      state.isReqMessage = true;
      state.user = [
        ...state.user.map((a: IUser) => {
          if (a.id === action.payload) {
            return { ...a };
          }
          return a;
        }),
      ];
    },
  },
});

export const { addMessage, getUserMessage, setUsersData } =
  messageSlice.actions;
export default messageSlice.reducer;
