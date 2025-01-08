import React, { createContext, useState } from 'react';

export const UserActionContext = createContext();

export const UserActionProvider = ({ children }) => {
    const [actions, setActions] = useState([]);

    const registerAction = (action) => {
        setActions((prevActions) => [...prevActions, action]);
        console.log(`Ação registrada: ${action}`);
    };

    return (
        <UserActionContext.Provider value={{ actions, registerAction }}>
            {children}
        </UserActionContext.Provider>
    );
};
