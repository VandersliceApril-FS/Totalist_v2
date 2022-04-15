import React, {createContext, useState } from 'react';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    let token = localStorage.getItem('storedToken');
    let user = JSON.parse(localStorage.getItem('user'));
    const [ auth, setAuth ] = useState({token, user});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;