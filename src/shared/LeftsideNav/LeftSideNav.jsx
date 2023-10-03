import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        {categories.map((category) => (
          <li
            key={category.id}
            className="list-none  py-2 pl-7 bg-slate-800 my-1"
          >
            <Link>{category.name}</Link>
          </li>
        ))}
      </div>

      <div className="py-5">

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={one} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <p className="flex justify-between items-center">
              <span>Sports</span>{" "}
              <span className="flex items-center gap-2">
                <AiOutlineCalendar></AiOutlineCalendar> Jan 4, 2022{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={two} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <p className="flex justify-between items-center">
              <span>Sports</span>{" "}
              <span className="flex items-center gap-2">
                <AiOutlineCalendar></AiOutlineCalendar> Jan 4, 2022{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={three} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <p className="flex justify-between items-center">
              <span>Sports</span>{" "}
              <span className="flex items-center gap-2">
                <AiOutlineCalendar></AiOutlineCalendar> Jan 4, 2022{" "}
              </span>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default LeftSideNav;
