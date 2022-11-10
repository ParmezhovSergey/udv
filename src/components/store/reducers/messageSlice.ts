import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/User";

interface MessageState {
  message: any;
  user: IUser[];
}

const initialState: MessageState = {
  message: [
    {
      userId: 1,
      text: [],
    },
    {
      userId: 2,
      text: [],
    },
    {
      userId: 3,
      text: [],
    },
  ],
  user: [
    {
      id: 1,
      name: "Andrew",
    },
    {
      id: 2,
      name: "Oleg",
    },
    {
      id: 3,
      name: "Anna",
    },
  ],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action) {
      //   state.message.push({
      // id: new Date().toISOString(),
      // text: action.payload.text,
      //completed: false,
      // });
      state.message = [
        ...state.message.map((s: any) => {
          if (s.userId === action.payload.id) {
            return { ...s, text: [...s.text, action.payload.text] };
          }
          return s;
        }),
      ];
    },
    getUserMessage(state, action: PayloadAction<number>) {
      state.message = [
        ...state.message.filter((a: any) => a.userId === action.payload),
        
      ];
      
    },
  },
});
export const { addMessage, getUserMessage } = messageSlice.actions;
export default messageSlice.reducer;
