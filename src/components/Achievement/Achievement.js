import React from "react";

const Achievement = ({ props }) => {
  const { img, cnt, field } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="h-14 w-14" src={img} alt="" />
      <p className="text-3xl font-bold my-2 text-warning">{cnt}+</p>
      <p className="font-bold  text-lg">{field}</p>
    </div>
  );
};

export default Achievement;
