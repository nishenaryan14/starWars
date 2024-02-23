import { createContext, useContext, useState } from "react";

const ResidentContext = createContext();

export const ResidentProvider = ({ children }) => {
  const [planetName, setPlanetName] = useState("");
  const [residents, setResidents] = useState([]);

  return (
    <ResidentContext.Provider
      value={{ residents, setResidents, planetName, setPlanetName }}
    >
      {children}
    </ResidentContext.Provider>
  );
};

export const useResidents = () => useContext(ResidentContext);
