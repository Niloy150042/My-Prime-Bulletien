import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (news) {
            // Simulate loading time or set loading false when news is available
            setLoading(false);
        }
    }, [news]);

    if (loading) {
        // Spinner while loading
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"></div>
            </div>
        );
    }

    
    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full  my-4 ">

            {/* Author and Date */}

            <div className="flex items-center gap-3 p-4 w-full">

                <img
                    src={news.author?.img}
                    alt={news.author?.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold">{news.author?.name}</p>
                    <p className="text-sm text-gray-500">{news.author?.published_date?.split(' ')[0]}</p>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold px-4">{news.title}</h2>

            {/* Image */}
            <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-48 object-cover my-2"
            />

            {/* Details */}
            <p className="px-4 text-gray-600 my-2 line-clamp-4">
                {news.details}
            </p>

            {/* Read More */}
            <Link to={`/news/${news._id}`} className="px-4 py-2">
                <button className=" font-semibold hover:underline btn bg-gray-200 text-black">
                    Read More
                </button>
            </Link >

            {/* Rating and Views */}
            <div className="flex justify-between items-center px-4 py-2 border-t mt-2">
                <div className="flex items-center gap-1 text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="ml-2 text-gray-700">{news.rating?.number || 0}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 10l4.553-2.276A2 2 0 0122 9.618V14.382a2 2 0 01-2.447 1.894L15 14M4 6h16M4 6v12M20 6v12M4 18h16" />
                    </svg>
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;