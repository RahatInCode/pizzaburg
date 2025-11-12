import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(getAuth(), email, password);
    }
    const authInfo = {
        loading,
      createUser,
    }
    return (
        <AuthContext.Provider value={{authInfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;