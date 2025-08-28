import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth";







const AuthProvider = ({ children }) => {
   
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [user, setUser] = useState(null)

    // first time email pass create korar time 
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password,)
    }
    // kon user exist kortese sheta dkeha 
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (user) => {

            setUser(user)
            console.log(user);

        })
        return () => {
            unsubsCribe
        }

    }, [])

    // sign in existing user 

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign in with google

    const signInwithGoogle =()=>{
        return signInWithPopup(auth,googleprovider)
    }
    // log out the user 

    const signOutUser = ()=>{
        signOut(auth)

    }
    // facebook login 
    const facebookLogin =(facebookprovider)=>{
        signInWithPopup(auth,facebookprovider)
    }

    const authinfo = {
        user,
        createUserWithEmail,
        setUser,
        signInUser,
        signInwithGoogle,
        signOutUser,
        facebookLogin
    }

    return (
        <AuthContext.Provider value={authinfo}> {children} </AuthContext.Provider>
    );
};

export default AuthProvider;