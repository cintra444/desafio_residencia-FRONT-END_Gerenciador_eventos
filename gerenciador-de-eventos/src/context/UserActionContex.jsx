import React, { createContext, useState } from "react";

export const UserActionContext = createContext();

const UserActionProvider = ({ children }) => {
    const [userAction, setUserAction] = useState([]);
    
const addUserAction = (action) => {
    setUserAction([...userAction, action]);
  };

  return (
    <UserActionContext.Provider value={{ userAction, addUserAction }}> 
      {children}    
    </UserActionContext.Provider>
  );
  };

  export default UserActionProvider;
