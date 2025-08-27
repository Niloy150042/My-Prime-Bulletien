import { useNavigate } from 'react-router-dom';
import erorImage from '../assets/images/page-not foung.jpg'

const Errorpage = () => {
    const navigae = useNavigate()
    return (
        <div className='flex flex-col justify-center h-screen items-center space-y-6 '>
              <p className='text-3xl font-bold text-red-800'>Sorry ! This page is not Found !!</p>
             <img src={erorImage} className='w-[500px] md:w-md sm:w-md' alt="" />
             <button className='btn btn-accent text-white' onClick={()=>navigae(-1)} > Go back  </button>
        </div>
    );
};

export default Errorpage;