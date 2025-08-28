import { FaArrowDown } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Register from "./Register";
import { Link } from "react-router-dom";
import loginImage from '../assets/images/login.jpg'
import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
const Login = () => {
    const {signInUser,setUser}=useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault()

        const email = e.target.email.value 
        const password = e.target.password.value
        signInUser(email,password)
        .then((result)=>{
            setUser(result.user)
        })
        .catch((err=>{
            console.log(err);
        }))


    }
    return (
        
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-center">
                    <img src={loginImage} className="h-[350px] w-full rounded-3xl animate-pulse" alt="" />
                </div>

                <div className="card  w-full max-w-sm  bg-base-300 ">
                    <div className="card-body bg-gray-200  ">
                        <p className="flex items-center gap-4 font-semibold text-3xl justify-center ">Please Log-in <FaArrowDown /> </p>
                        <form className="form" onSubmit={handleSubmit}>
                            <label className="label font-semibold ">Email : </label>
                            <input type="email" name="email" className="input rounded-xl" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input rounded-xl" placeholder="Password" />

                            <button className="btn btn-neutral mt-4 items-center w-full">Login <FaLongArrowAltRight /></button>
                        </form>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">New to this site ?</p>
                            <Link to={'/auth/register'}> <p className="text-blue-600">Register</p> </Link>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default Login;