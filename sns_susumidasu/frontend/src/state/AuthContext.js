import { Children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
	// user: null,
	user: {
		_id: "6592c5e00477106d5a9f2d45",
		username: "altosaex",
		email: "sae.coach@gmail.com",
		password: "Y6jxkVHT9",
		profilePicture: "",
		coverPicture: "",
		followers: [],
		followings: [],
		isAdmin: false,
	},
		isFetching: false,
		error: false,
};


//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);
	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
