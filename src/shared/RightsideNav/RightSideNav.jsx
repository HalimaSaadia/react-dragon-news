import { BsGoogle, BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bgOne from "../../assets/bg1.png";


const RightSideNav = () => {
  return (
    <div>
      <div className="px-5">
        <h2 className="text-2xl font-bold mb-5">Login with</h2>
        <div className=" space-y-3">
          <button className="btn btn-outline btn-primary w-full ">
            <BsGoogle></BsGoogle> Google
          </button>
        </div>
        <div className="space-y-3 mt-4">
          <button className="btn btn-outline w-full  ">
            <BsGithub></BsGithub> Github
          </button>
        </div>
      </div>

      <div className="px-5 mt-5">
        <h2 className="text-2xl font-bold mb-5">Find Us On</h2>
        <div className="border btn w-full border-white rounded-t-lg rounded-b-none">
          <Link className=" flex items-center gap-3 justify-center  ">
            <FaFacebookF></FaFacebookF> Facebook
          </Link>
        </div>
        <div className="border btn w-full border-x-white rounded-none ">
          <Link className=" flex items-center gap-3 justify-center  ">
            <FaTwitter></FaTwitter> Twitter
          </Link>
        </div>
        <div className="border btn w-full border-white rounded-b-lg rounded-t-none">
          <Link className="flex items-center gap-3 justify-center">
            <BsInstagram></BsInstagram> Instagram
          </Link>
        </div>
      </div>

      <div className="px-5 space-y-3 mt-5 ">
        <h2 className="text-2xl font-bold mb-5">Q Zone</h2>
        <div className="text-center">
          <img src={qZone1} alt="" />
          <h3 className="text-xl">Swimming</h3>
        </div>
        <div className="text-center">
          <img src={qZone2} alt="" />
          <h3 className="text-xl">Class</h3>
        </div>
        <div className="text-center">
          <img src={qZone3} alt="" />
          <h3 className="text-xl">play Ground</h3>
        </div>
      </div>

      <div
        className="hero min-h-[500px] mt-5"
        style={{
          backgroundImage:
            `url(${bgOne})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl lg:text-4xl font-bold">Create an Amazing Newspaper</h1>
            <p className="mb-5">
            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
