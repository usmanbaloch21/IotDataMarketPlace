import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const AppContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => {
  const [state, dispatch] = useContext(AppContext);
  return [state, dispatch];
};
