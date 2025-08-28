import { useLoaderData } from "react-router-dom";
import NewsDetails from "./NewsDetails";

const SignleNews = () => {
    const newsDetails = useLoaderData()
    const { data } = newsDetails
    return (
        <div>
            {
                data?.map((news) => <NewsDetails key={news._id} news={news}></NewsDetails>)
            }
        </div>
    );
};

export default SignleNews;