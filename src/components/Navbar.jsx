import { Link } from "react-router-dom";
import usericon from '../assets/images/user.png'
import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext)
    return (
        <div>
            <div className="flex justify-between p-3 items-center">
            <div></div>
            <div className="space-x-3">
                <Link to="/">Home</Link>
                <Link to='/carrer'>Carrer</Link>
                <Link to='/about'> About </Link>
            </div>

            <div className="flex gap-3 ">
                <img src={usericon} alt="" />
               {user?<button onClick={signOutUser}  className="btn bg-black text-white">Log-out</button>:<button className="btn btn-neutral"> <Link to={'/auth/log-in'} > Log-in </Link> </button>}
            </div>
            
           
        </div>
         <p className="text-right font-semibold">{user && user.email}</p>
        </div>
        
    );
};

export default Navbar;