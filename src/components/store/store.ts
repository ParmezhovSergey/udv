import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import messageSlice from './reducers/messageSlice';


const rootReducer = combineReducers({
	authReducer,
	messageSlice,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];