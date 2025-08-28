import { useNavigate } from "react-router-dom";

const NewsDetails = ({ news }) => {

    const { others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = news
    const navigate = useNavigate()
    return (
        <div className="bg-white  shadow-lg overflow-hidden w-full md:w-md lg:w-[1000px] mx-auto py-4   my-4 ">

            {/* Author and Date */}

            <div className="flex items-center gap-3 p-4 w-full">

                <img
                    src={author?.img}
                    alt={author?.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold">{author?.name}</p>
                    <p className="text-sm text-gray-500">{news.author?.published_date?.split(' ')[0]}</p>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold px-4">{title}</h2>

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-[600px] object-cover my-2"
            />

            {/* Details */}
            <p className="p-4 h-[300px] text-justify text-black font-semibold my-3 line-clamp-4">
                {details}
            </p>

            {/* Read More */}


            {/* Rating and Views */}
            <div className="flex justify-between items-center px-4 py-2 border-t mt-2">
                <div className="flex items-center gap-1 text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="ml-2 text-gray-700">{rating?.number || 0}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 10l4.553-2.276A2 2 0 0122 9.618V14.382a2 2 0 01-2.447 1.894L15 14M4 6h16M4 6v12M20 6v12M4 18h16" />
                    </svg>
                    <span>{total_view}</span>
                </div>

            </div>
            <button onClick={() => navigate(-1)} className="btn btn-primary w-full" > Go-Back</button>
        </div>
    );
};

export default NewsDetails;