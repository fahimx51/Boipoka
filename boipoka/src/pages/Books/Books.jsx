import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl text-black font-bold text-center m-5">Books</h1>

      <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-20 my-10 justify-center items-center">
        <Suspense fallback={<h1>Loading Data...</h1>}>
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
