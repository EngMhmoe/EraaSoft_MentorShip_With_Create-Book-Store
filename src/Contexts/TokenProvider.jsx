//import New createContext
import { createContext } from "react";

//import useState Hook
import { useState } from "react";

//create Context Provider
export const TokenCreateContext = createContext();

function ComponentTokenProvider({ children }) {
  const [Token, setToken] = useState(localStorage.getItem("token"));

  return (
    <TokenCreateContext.Provider value={{ Token2: Token, setToken: setToken }}>
      {children}
    </TokenCreateContext.Provider>
  );
}

export default ComponentTokenProvider;
