import { AppDispatch } from "../store";
import { authSlice } from "./authSlice";

export const setAuth = (error?: any) => async (dispatch: AppDispatch) => {
  try {
    if (!error) {
      dispatch(authSlice.actions.authSuccess());
    } else {
      dispatch(authSlice.actions.authFetchingError(error));
    }
  } catch (e: any) {
    dispatch(authSlice.actions.authFetchingError(e.message));
  }
};

export const removeAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.authUnSubscribe());
  } catch (e: any) {
    dispatch(authSlice.actions.authFetchingError(e.message));
  }
};
