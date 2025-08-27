import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-1 items-center bg-gray-300 rounded mt-2">
            <p className="bg-pink-500 text-white p-2 w-[35%]">Latest News</p>
            <Link to={'/'} >
                <div className="">
                    <Marquee pauseOnHover>
                        At The Daily Prime Bulletin, we cover a wide range of topics — from politics, economy, and technology to lifestyle, sports, and global affairs. With a dedicated team of writers and editors, we strive to present balanced perspectives and fact-checked reports so that our readers can form their own opinions with confidence.
                    </Marquee>

                </div></Link>
        </div>
    );
};

export default LatestNews;