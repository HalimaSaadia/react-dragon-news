import { BsBookmark, BsShare, BsEye } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

import { useState } from "react";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const {
    _id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  const { name, published_date, img } = author;
  const { number } = rating;

  return (
    <div className="card bg-base-100 shadow-xl border rounded-lg mb-10 ">
      <div className="flex justify-between px-7  rounded-t-lg items-center bg-slate-600">
        <div className="flex gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={img} />
            </div>
          </div>
          <div>
            <h4 className="text-base">{name}</h4>
            <p className="text-sm">{published_date}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <BsBookmark />
          <BsShare />
        </div>
      </div>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        {details.length > 200 ? <p>{details.slice(0,200)}...<Link to={`/news-details/${_id}` }className="text-blue-600">Details</Link></p> :  <p className="border-b pb-10">{details}</p>}
        
        <div className="card-actions flex justify-between items-center mt-5">
          <div className="flex items-center gap-3">
            <ReactStars
              count={5}
              value={number}
              size={24}
              isHalf={true}
              activeColor="orange"
            />
            <span>{number}</span>
          </div>
          <div className="flex items-center gap-3">
            <BsEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
