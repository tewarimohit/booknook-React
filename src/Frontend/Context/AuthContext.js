import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);

const authReducer = (state, action) => {
    switch(action.type){
        case 'USER-LOADING-SUCCESSFUL':
            return{...state,isAuth:true,user:action.payload};
    }
};

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, {
		isAuth: localStorage.getItem("token") ? true : false,
		user:null,
	});

	return <AuthContext.Provider value={{authState,authDispatch}}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
