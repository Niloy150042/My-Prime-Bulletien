import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image1 from '../assets/images/class.png'
import image2 from '../assets/images/swimming.png'
import image3 from '../assets/images/playground.png'

const Leftbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (

        <div className="flex flex-col">

            <Link tabIndex={0} className="bg-gray-400  border-b-2 border-black font-semibold p-2 rounded ">All categories-{categories.length} </Link>

            <div className="dropdown-content menu bg-base-300 rounded-box  w-52 p-2  gap-1 shadow-2xl">
                {categories.map((category) => <NavLink to={`/category/${String(category.id).padStart(2,'0')}`} key={category.id} className="btn bg-base-400 w-fLink l shadow-2xl "> {category.name} </NavLink >)}

            </div >
            <div className="bg-gray-200 p-2">
                <img src= {image2} alt="" />
                <img src= {image3} alt="" />
                <img src={image1} alt="" />
            </div>
            

        </div>
    );
};

export default Leftbar;