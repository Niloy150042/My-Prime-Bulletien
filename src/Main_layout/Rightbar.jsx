import Joinus from "../components/Joinus";
import SocialLogin from "../components/SocialLogin";
import image1 from '../assets/images/demo-card-thumbnail.png'
import image2 from '../assets/images/swimming.png'
import image3 from '../assets/images/bg.png'


const Rightbar = () => {
    return (
        <div className="space-y-2">
           <SocialLogin></SocialLogin>
           <Joinus></Joinus>
           <div className="bg-gray-200 p-2">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
           </div>

        </div>
    );
};

export default Rightbar;