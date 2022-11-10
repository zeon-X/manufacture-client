import React from "react";

const BlogCard1 = ({ props }) => {
  const { img, title, host } = props;
  return (
    <div className="w-full">
      <img className="w-full" src={img} alt={title} />
      <div className="mt-3">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm">By: {host}</p>
        <button className="text-gray-500 mt-3 text-sm font-semibold">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard1;
