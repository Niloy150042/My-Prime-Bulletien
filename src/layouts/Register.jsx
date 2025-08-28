import { useContext, useState } from "react";
import { FaArrowDown, FaEyeSlash, FaLongArrowAltRight, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../provider/AuthContext";
const Register = () => {
    const { createUserWithEmail ,setUser } = useContext(AuthContext)
    const [seeIcon, setseeIcon] = useState(false)
    const handleClicked = () => {
        setseeIcon(!seeIcon)
    }
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmail(email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (

        <div className=" mx-auto h-screen  bg-gray-300 flex justify-center items-center p ">
            <div className=" p-10 w-full md:w-md lg:w-[500px] h-full md:h-screen lg:h-[600px]  bg-gray-200 rounded-2xl  ">
                <p className="flex items-center gap-4 font-bold text-3xl justify-center mb-3 p-3" >Please Register<FaArrowDown /> </p>

                <form onSubmit={handleSubmit} className=" grid grid-cols-1 gap-2 items-center justify-center">
                    <label className=" font-semibold  ">Name : </label>

                    <input type="text" name="name" className=" p-2 border-2 border-gray-300 rounded-xl w-full " placeholder="your name" />
                    <label className=" font-semibold  ">Email : </label>

                    <input type="email" name="email" className=" p-2 border-2 border-gray-300 rounded-xl w-full " placeholder="Email" />


                    <label className="font-semibold">Password</label>

                    <div className="flex relative">
                        <input name="password" type={seeIcon ? 'text' : 'password'} className="p-2 border-2 border-gray-300  rounded-2xl w-full" placeholder="Password" />


                        {
                            seeIcon ? <FaRegEye onClick={handleClicked} className="absolute ml-80 md:ml-80 lg:ml-95 mt-3 "></FaRegEye> : <FaEyeSlash onClick={handleClicked} className="absolute ml-80 md:ml-80 lg:ml-95 mt-3" />

                        }

                    </div>

                    <label className="font-semibold">Photo-url</label>
                    <input name="photoUrl" type="text" className=" p-2 border-2 border-gray-300 rounded-xl w-full" placeholder="Your image link " />

                    <button className="btn btn-neutral mt-4 items-center rounded-2xl">Register <FaLongArrowAltRight /></button>
                </form >


                <div className="flex justify-between items-center  p-5">
                    <p className="font-semibold">Have and account ?</p>
                    <Link to={'/auth/log-in'}> <p className="text-blue-600">Log-in</p> </Link>
                </div>
                <button onClick={() => navigate(-1)} className="bg-black text-white btn btn-block rounded-2xl"> Go-back</button>

            </div>


        </div>
    );
};

export default Register;