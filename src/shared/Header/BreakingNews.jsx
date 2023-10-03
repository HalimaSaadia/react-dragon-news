import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex gap-5">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="space-x-10">
                <p><Link>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odit odio assumenda a veniam itaque,</Link></p>
                <p><Link>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate iure delectus soluta suscipit ab quis commodi, cum</Link></p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;