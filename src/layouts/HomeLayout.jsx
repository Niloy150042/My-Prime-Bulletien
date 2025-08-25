import { Outlet } from "react-router-dom";
import CategoryPages from "../components/CategoryPages";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import StaggeredDropDown from "../Main_layout/Leftbar";

import Rightbar from "../Main_layout/Rightbar";

const HomeLayout = () => {
    return (
        <div  className=" w-full md:w-full lg:w-[1200px] mx-auto bg-base-300 ">
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
            </header>

              <nav>
                <Navbar></Navbar>
              </nav>

            <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">

            <aside className="col-span-3 "> <StaggeredDropDown></StaggeredDropDown></aside>
            <section className="col-span-6 "> <Outlet></Outlet></section>
            <aside className="col-span-3 "> <Rightbar></Rightbar></aside>

            </main>
        </div>
    );
};

export default HomeLayout;