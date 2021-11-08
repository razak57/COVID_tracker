import { useReducer } from "react";

const reducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, country: payload };
    case "SET_COUNTRIES":
      return { ...state, countries: payload };
    case "SET_DATA":
      return { ...state, data: payload };
    case "SET_COUNTRY_DATA":
      return { ...state, countryData: payload };

    default:
      throw new Error();
  }
};

export const useTracker = () => {
  const initial = { country: "", countries: [], data: [], countryData: {} };
  const [state, dispatch] = useReducer(reducer, initial);

  return {
    state,
    dispatch,
  };
};

export default useTracker;
