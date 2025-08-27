import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Joinus = () => {
    return (
        <div className="p-2  ">
            <p className="font-semibold text-xl"> Join us  </p>
            <div className="flex flex-col w-full mt-2">
                <button className="btn justify-start "> <FaFacebook></FaFacebook> Facebook  </button>
                <button className="btn justify-start "><FaTwitter /> Twitter </button>
                <button className="btn justify-start"><FaInstagramSquare  /> Instagram </button>
            </div>
        </div>
    );
};

export default Joinus;