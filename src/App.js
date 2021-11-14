import React from "react";
import { CovidProvider } from "./context/covidContext";
import CovidTracker from "./context/covidTracker";


const App = () => {
  return (
    <>
      <CovidProvider>
        <CovidTracker />
      </CovidProvider>
    </>
  );
};

export default App;
