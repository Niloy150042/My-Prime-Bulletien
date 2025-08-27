import moment from "moment";

const Header = () => {
    return (
        <div className="flex flex-col justify-center gap-2 items-center mt-3">
            <h1 className="title text-4xl font-semibold "> The Daily PrimeBuletien </h1>
            <h1 className="text-gray-600 text-2xl text-center">Your trusted source for prime news, every day</h1>
            <p className="font-semibold">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;