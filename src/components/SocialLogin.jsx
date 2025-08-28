import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AuthContext from "../provider/AuthContext";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { FacebookAuthProvider } from "firebase/auth";

const SocialLogin = () => {
    const {signInwithGoogle,setUser,facebookLogin}=useContext(AuthContext)
    const googleprovider = new GoogleAuthProvider();
    const facebookprovider =  new FacebookAuthProvider();
    const auth = getAuth();
   

    const handleSignGoogle =()=>{
        signInwithGoogle(auth,googleprovider)
        .then((result)=>{
            
            setUser(result.user)
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    const handleFblogin =()=>{
        facebookLogin(facebookprovider)
        .then((result)=>{
            (
            console.log(result)
        )
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="flex flex-col  space-y-2 p-2">

            <p className="text-xl font-semibold">Log-in </p>
            <button onClick={handleSignGoogle} className="btn bg-gray-300 flex items-center w-full"> <FaGoogle /> Log in with Google </button>
            <button className="btn  bg-gray-300 flex items-center  w-full"> <FaGithub /> Log in with Github </button>
            <button onClick={handleFblogin} className="btn  bg-gray-300 flex items-center  w-full"> <FaFacebook/> Log in with Facebook </button>
        </div>
    );
};

export default SocialLogin;