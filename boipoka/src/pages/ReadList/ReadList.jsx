import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLocalData } from "../../utility/AddToLocalStorage";
import ReadListItem from "../ReadListItem/ReadListItem";

const ReadList = () => {
  const [sortLabel, setSortLabel] = useState("Sort By");

  const dataList = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedData = getLocalData();
    const convertedData = storedData.map((book) => parseInt(book));
    const myReadList = dataList.filter((book) =>
      convertedData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleChange = (e) => {
    const selectedText = e.target.value;
    setSortLabel(selectedText);
    handleSort(selectedText);
  };

  const handleSort = (type) => {
    const sortedList = [...readList];

    if (type === "Name") {
      sortedList.sort((a, b) => a.bookName.localeCompare(b.bookName));
    }

    if(type == "Category") {
        sortedList.sort((a, b) => a.category.localeCompare(b.category));
    }

    if(type == "Rating") {
        sortedList.sort((a, b) => a.rating - b.rating);
    }

    if(type==="Pages")
    {
        sortedList.sort((a, b) => (a.totalPages - b.totalPages));
    }
    setReadList(sortedList);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-5">
      <p className="h-25 w-full bg-gray-100 text-2xl rounded-xl text-black font-bold flex justify-center items-center">
        Books
      </p>

      <div className="relative h-13 w-36.25 bg-green-500 rounded-lg flex items-center justify-center gap-2 text-white px-2 shadow-md hover:bg-green-600 transition-colors">
        <select
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 outline-none focus:outline-none border-none ring-0 focus:ring-0 bg-green-600"
        >
          <option value="Name">Name</option>
          <option value="Category">Category</option>
          <option value="Rating">Rating</option>
          <option value="Pages">Pages</option>
        </select>

        {/* 3. The label now updates dynamically */}
        <span className="text-base font-medium">{sortLabel}</span>
        <HiChevronDown className="text-xl" />
      </div>

      <div className="w-full">
        <Tabs className="text-gray-400">
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {readList.length > 0 && (
              <h2 className="text-center my-10 text-3xl text-sky-600 font-bold">
                Nice, You Read {readList.length} Books
              </h2>
            )}
            {readList.map((book, index) => (
              <ReadListItem key={index} book={book} />
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
