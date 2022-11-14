import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard1 = ({ props, id }) => {
  const navigate = useNavigate();
  const { img, title, host } = props;
  console.log(id);
  return (
    <div className="w-full ">
      <img className="w-full h-52 text-sm" src={img} alt={title} />
      <div className="mt-3">
        <p className="font-semibold text-sm">{title}</p>
        <div className="flex justify-between items-start mt-1">
          <p className="text-sm">By: {host}</p>
          <button
            onClick={() => navigate(`/readBlogs?blogNo=${id}`)}
            className="text-gray-500 text-sm font-semibold underline"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard1;
