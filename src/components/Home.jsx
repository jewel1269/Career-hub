import Banner from "./Banner/Banner";
import FutureJob from "./FutureJob/FutureJob";
import MainBody from "./MainBody/MainBody";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainBody></MainBody>
            <FutureJob></FutureJob>
        </div>
    );
};

export default Home;