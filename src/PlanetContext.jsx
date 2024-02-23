import { createContext, useContext, useState } from "react";

const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  return (
    <PlanetsContext.Provider value={{ planets, setPlanets }}>
      {children}
    </PlanetsContext.Provider>
  );
};

export const usePlanets = () => useContext(PlanetsContext);
