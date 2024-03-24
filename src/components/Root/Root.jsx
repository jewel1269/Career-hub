import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import FutureJob from "../FutureJob/FutureJob";
import MainBody from "../MainBody/MainBody";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
               
                <Outlet></Outlet>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;