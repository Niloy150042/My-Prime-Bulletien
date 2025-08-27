import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null)

    return (
        <AuthContext.Provider value={'mehedi'}> {children} </AuthContext.Provider>
    );
};

export default AuthProvider;