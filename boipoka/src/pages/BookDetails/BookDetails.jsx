import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addLocalData } from "../../utility/AddToLocalStorage";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const numericId = parseInt(id);

  const pageData = data[numericId - 1];


  const handleRead = ()=>{
    addLocalData(id);
  }

  return (
    <div className="flex sm:flex-col lg:flex-row gap-8 justify-center items-center mb-20">
      <div className="bg-gray-100 h-[711px] w-[573px] rounded-xl flex justify-center items-center shrink-0 shadow-sm">
        <img
          className="h-[564px] w-[425px] rounded-xl"
          src={pageData.image}
          alt="Book Image"
        />
      </div>

      <div className="m-5">
        <h1 className="text-black text-4xl font-medium mx-2 mb-4">
          {pageData.bookName}
        </h1>
        <p className="text-gray-700 mx-2 mb-4">By : {pageData.author}</p>
        <div className="border-t-1 border-gray-200 mx-2 mb-4"></div>
        <p className="mx-2 mb-4 text-gray-700 font-medium ">
          {pageData.category}
        </p>
        <div className="border-t-1 border-gray-200 mx-2 mb-4"></div>
        <p className="text-gray-500 mx-2 mb-4">
          <span className="font-bold text-black">Review : </span>{" "}
          {pageData.review}
        </p>
        <div className="mx-2 mb-4">
          <span className="font-bold text-black">Tag </span>
          {pageData.tags.map((tag, index) => (
            <p key={index} className="inline-block text-green-500 font-medium px-3 py-1 rounded-full bg-gray-100 mx-2 text-center shadow-sm">
              #{tag}
            </p>
          ))}
        </div>
        <div className="border-t-1 border-gray-200 mx-2 mb-4"></div>

        <div className="grid grid-cols-[180px_1fr] gap-y-4 mx-2 text-gray-500 mx-2 mb-4">
          <span>Number of Pages :</span>
          <span className="text-black font-bold">{pageData.totalPages}</span>

          <span>Publisher :</span>
          <span className="text-black font-bold">{pageData.publisher}</span>

          <span>Year of Publishing :</span>
          <span className="text-black font-bold">
            {pageData.yearOfPublishing}
          </span>

          <span>Rating :</span>
          <span className="text-black font-bold">{pageData.rating}</span>
        </div>

        <div className="text-black mx-2">
            <button onClick={handleRead} className="btn mr-5 bg-white text-black border-gray-300 font-bold">Mark as Read</button>
            <button className="btn bg-sky-400 border-0 font-bold">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
