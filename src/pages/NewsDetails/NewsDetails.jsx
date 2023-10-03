import { useParams } from "react-router-dom";
import RightSideNav from "../../shared/RightsideNav/RightsideNav";


const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div className="grid md:grid-cols-4">
            <div className="md:col-span-3">
                <h1 className="text-3xl">News Details Coming sooon!!!!</h1>
                <h1 className="text-3xl">{id}</h1>
            </div>
            <div>
                <RightSideNav />
            </div>
        </div>
    );
};

export default NewsDetails;