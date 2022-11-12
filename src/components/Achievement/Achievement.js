import React from "react";

const Achievement = ({ props }) => {
  const { img, cnt, field } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="h-12 w-12 " src={img} alt="icon" />
      <p className="text-2xl font-bold mt-3 mb-1 text-warning">{cnt}+</p>
      <p className="font-bold text-sm">{field}</p>
    </div>
  );
};

export default Achievement;
