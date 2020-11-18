import React, { useState } from 'react';

const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    //Global State
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Context.Provider value={[menuOpen, setMenuOpen]}>
            {children}
        </Context.Provider>
    )
};

export default Context;