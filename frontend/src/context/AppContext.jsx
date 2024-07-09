import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);

    const logout = () => {
        localStorage.removeItem('user');
        setCurrentUser(null);
        setLoggedIn(false);
    }

    return (
        <AppContext.Provider value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn, logout }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;