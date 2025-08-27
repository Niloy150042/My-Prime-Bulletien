import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={'mehedi'}> {children} </AuthContext.Provider>
    );
};

export default AuthProvider;