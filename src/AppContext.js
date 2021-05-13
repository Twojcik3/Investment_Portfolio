import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    return <AppContext.Provider value={[isAuth, setIsAuth]}>{props.children}</AppContext.Provider>
}