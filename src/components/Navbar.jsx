import { Link } from "react-router-dom";
import usericon from '../assets/images/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between p-3 items-center">
            <div></div>
            <div className="space-x-3">
                <Link to="/">Home</Link>
                <Link to='/carrer'>Carrer</Link>
                <Link to='/about'> About </Link>
            </div>
            <div className="flex gap-3 ">
                <img src={usericon} alt="" />
                 <button className="btn btn-neutral"> <Link to={'/auth/log-in'} > Log-in </Link> </button>
            </div>
        </div>
    );
};

export default Navbar;