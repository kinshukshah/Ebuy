import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, StateReducer } from "../reducers/StateReducer";
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [userState, userStatedispatch] = useReducer(
    StateReducer,
    INITIAL_STATE
  );
  return (
    <StateContext.Provider value={{ userState, userStatedispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useUserState = () => useContext(StateContext);
