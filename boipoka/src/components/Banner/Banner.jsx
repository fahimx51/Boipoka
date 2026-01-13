import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gray-100 min-h-130 rounded-3xl mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse lg:mx-20">
        <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-black my-5">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary bg-green-500 border-0 my-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
