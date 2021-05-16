import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState("")
    return <AppContext.Provider value={[username, setUsername], [isAuth, setIsAuth]}>{props.children}</AppContext.Provider>
}