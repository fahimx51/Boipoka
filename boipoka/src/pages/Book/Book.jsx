import React from "react";
import Tag from "../Tags/Tag";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);
  return (
    <Link to={`/bookDetails/${singleBook.bookId}`}>
      <div className="h-[482px] w-[374px] border-1 border-gray-200  flex flex-col items-center rounded-2xl hover:shadow-lg hover:border-green-300">
        <div className="w-[326px] h-[230px] bg-gray-100 flex justify-center items-center rounded-xl my-5">
          <img
            className="h-[166px] w-[134px]"
            src={singleBook.image}
            alt="Book-Cover-Page"
          />
        </div>

        <div className="w-full px-5">
          <div className="flex gap-3 my-4">
            {singleBook.tags.map((singleTag, index) => (
              <Tag key={index} singleTag={singleTag}></Tag>
            ))}
          </div>

          <div>
            {/* div for title */}
            <h1 className="font-bold text-black text-lg">
              {singleBook.bookName}
            </h1>
          </div>

          <div className="mb-5">
            {/* div for para */}
            <small className="text-gray-800">By : {singleBook.author}</small>
          </div>

          <div className="border-dashed border-1 border-gray-200 mb-5"></div>
          <div className="text-gray-800 flex flex-row justify-between">
            {/* bottom div */}
            <small>{singleBook.category}</small>

            <div className="flex flex-row gap-2">
              <small>{singleBook.rating}</small>
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
