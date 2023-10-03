import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../shared/Header/BreakingNews";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftsideNav/LeftsideNav";
import Navbar from "../../shared/Navbar/Navbar";
import News from "../../shared/News/News";
import RightSideNav from "../../shared/RightsideNav/RightsideNav";


const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border"><LeftSideNav/></div>
                <div className="md:col-span-2 border">
                <h1 className="text-3xl">Dragon News Home</h1>
                    {allNews.map(news => <News key={news._id} news={news}></News>)}
                </div>
                <div className="border">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;