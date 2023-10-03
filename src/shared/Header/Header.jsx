
import moment from "moment/moment";
import headingImage from "../../assets/logo.png"
const Header = () => {
    return (
        <div className="text-center space-y-4 mb-10">
            <img className="mx-auto" src={headingImage} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;