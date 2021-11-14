import React, { createContext } from "react";
import useTracker from "../hooks/useTracker";

/* simple provider pattern */

export const COVID_DEFAULT_VALUE = {
  state: {},
  dispatch: () => {},
};

export const CovidContext = createContext(COVID_DEFAULT_VALUE);

export const CovidProvider = ({ children }) => {
  const { state, dispatch } = useTracker();
  return (
    <CovidContext.Provider value={{ state, dispatch }}>
      {children}
    </CovidContext.Provider>
  );
};
