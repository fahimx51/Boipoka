import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoBook } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

const ReadListItem = ({ book }) => {
  return (
    <div className="flex h-[277px] w-full border-1 border-gray-200 rounded-xl my-5">
      <div className="flex items-center mx-6 gap-6">
        <div className="h-[230px] w-[230px] bg-gray-100 rounded-xl flex justify-center items-center">
          <img
            className="h-3/4 w-3/5 rounded-xl"
            src={book.image}
            alt="Book Image"
          />
        </div>
        <div className="flex-2">
          <h1 className="text-black text-2xl font-bold mb-3">
            {book.bookName}
          </h1>
          <p className="text-gray-500 text-sm mb-5">By : {book.author}</p>

          <div className="mb-5">
            <span className="text-black font-bold">Tag</span>
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-gray-100 mx-2 text-green-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-5">
            <IoTimeOutline className="inline text-2xl mr-2" />
            <span className="mr-5">
              Year of Publishing : {book.yearOfPublishing}
            </span>

            <CgProfile className="inline text-xl mr-2" />
            <span className="mr-5">Publisher : {book.publisher}</span>

            <GoBook className="inline text-xl mr-2" />
            <span className="mr-5">Page : {book.totalPages}</span>
          </div>

          <div className="border-b-1 border-gray-200 mb-5"></div>

          <div>
            <span className="mr-3 p-3 bg-sky-100 rounded-full text-sm text-sky-400">
              Category : {book.category}
            </span>
            <span className="mr-3 p-3 bg-orange-100 rounded-full text-sm text-orange-400">
              Rating : {book.rating}
            </span>
            <span className="p-3 bg-green-500 rounded-full text-sm text-white font-bold cursor-pointer">
              View Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadListItem;
