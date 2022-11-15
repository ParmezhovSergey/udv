import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/User";

export interface MessageState {
  message: string[];
  user: IUser[];
  isReqMessage: boolean;
}

const initialState: MessageState = {
  //   message: [
  //     {
  //       userId: 1,
  //       text: ['hgjh'],
  //     },
  //     {
  //       userId: 2,
  //       text: [],
  //     },
  //     {
  //       userId: 3,
  //       text: [],
  //     },
  //   ],
  message: [],
  user: [
    {
      id: 0,
      name: "Andrew",
      text: ["gbnth"],
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
    addMessage(state, action: PayloadAction<{ textValue: string; id: number }>) {
      state.user = [
        ...state.user.map((s: IUser) => {
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
        //...state.user.filter((a: any) => a.userId === action.payload),
      ];
    },
  },
});
export const { addMessage, getUserMessage } = messageSlice.actions;
export default messageSlice.reducer;
