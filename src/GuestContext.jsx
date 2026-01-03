import { useState, useContext, createContext } from "react";

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [activeGuest, setActiveGuest] = useState({});

  const value = {
    activeGuest,
    setActiveGuest
  }

  return <GuestContext.Provider value={value}>{ children }</GuestContext.Provider>
};

export const useAppropriateContext = () => {
  const context = useContext(GuestContext);

  if(!context) {
    throw Error("useAppropriateContext must be use within a GuestProvider");
  }
  return context;
}
