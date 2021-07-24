import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
