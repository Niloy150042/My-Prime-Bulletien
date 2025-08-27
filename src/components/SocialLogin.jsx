import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="flex flex-col  space-y-2 p-2">

            <p className="text-xl font-semibold">Log-in </p>
            <button className="btn bg-gray-300 flex items-center w-full"> <FaGoogle /> Log in with Google </button>
            <button className="btn  bg-gray-300 flex items-center  w-full"> <FaGithub /> Log in with Github </button>
            <button className="btn  bg-gray-300 flex items-center  w-full"> <FaFacebook/> Log in with Facebook </button>
        </div>
    );
};

export default SocialLogin;