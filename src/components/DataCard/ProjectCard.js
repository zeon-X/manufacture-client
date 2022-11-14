import React from "react";

const ProjectCard = ({ props }) => {
  const { img, title, details, link, githubLink } = props;
  return (
    <div className="hover:scale-105 transition-all ease-in-out hover:cursor-pointer  flex flex-col justify-between items-center border border-gray-300 border-dashed rounded shadow-lg">
      <div>
        <img className="rounded h-56" src={img ? img : ""} alt="" />
        <div className="p-4 flex flex-col justify-center items-center">
          <p className="text-xs font-semibold text-center my-3">
            {title ? title : ""}
          </p>
          <a target={"_blank"} href={link} className="btn btn-xs">
            Live link/Download link
          </a>
          <p className="text-xs text-center my-4">{details ? details : ""}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-center items-center">
        <a
          target={"_blank"}
          href={githubLink}
          className="btn btn-circle bg-white"
          alt=""
        >
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
            alt=""
          />
        </a>
        <a target={"_blank"} href={githubLink} className="text-xs underline">
          Click Here for Github Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
