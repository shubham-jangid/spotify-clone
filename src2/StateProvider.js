import React, { createContext, useReducer, useContext } from "react";
const StateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
