import React from "react";

const Tag = ({ singleTag }) => {
  return (
    <div className="h-10 px-3 inline-flex items-center justify-center bg-green-50 rounded-full">
      <span className="text-green-500 font-medium text-sm">{singleTag}</span>
    </div>
  );
};

export default Tag;
