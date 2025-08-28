import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import NoNews from "./NoNews";

const CategoryPages = () => {
    
    const allnews = useLoaderData()
    const news= allnews.data
    // console.log(news);

    return (
        <div>
            <h2 className="text-center font-semibold">PrimeBulletien Home </h2>
            <p className="text-center text-gray-500 flex justify-center items-center gap-2"> <span className="text-2xl font-bold text-black">{news.length}</span> news  are found  in this category </p>
            <div>
                {news.length==0 ? <NoNews></NoNews> :news.map((news)=> <NewsCard key={news._id} news={news} ></NewsCard> )}
            </div>
        </div>
    );
};

export default CategoryPages;