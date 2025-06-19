import React, { createContext, useState } from "react";
import ContextUi from "./ContextUi";

export const Plusmins = createContext();
const Context = () => {
  const [count, setCount] = useState(1);
  const minus = () => { 
    return setCount(count - 1)
}
  const plus = () => { 
    return setCount(count + 1)
}

  return (
    <>
      <Plusmins.Provider value={{ setCount: count,minus,plus}}>
        <ContextUi></ContextUi>
      </Plusmins.Provider>
    </>
  );
};

export default Context;
