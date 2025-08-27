
import nonews from '../assets/images/no-news.jpg'
const NoNews = () => {
    return (
        <div className="font-bold text-4xl flex justify-center items-center h-screen flex-col space-y-5">
             <p>No news here</p>
             <img src={nonews}  className='h-[300px]' alt="" />
        </div>
    );
};

export default NoNews;