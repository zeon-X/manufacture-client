import React from "react";
import Achievement from "../../components/Achievement/Achievement";

const HomeSection5 = () => {
  let achievements = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/659/659793.png",
      cnt: 100,
      field: "Country",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2652/2652218.png",
      cnt: 9000000,
      field: "Product Deliverd",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3126/3126649.png",
      cnt: 6750,
      field: "Happy Clients",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/707/707661.png",
      cnt: 4800,
      field: "FeedBacks",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3239/3239938.png",
      cnt: 10,
      field: "Servie Years",
    },
  ];
  return (
    <div className="mb-16 w-full flex flex-col justify-center items-center rounded-xl border border-dashed border-gray-200 shadow-xl p-10">
      <div className="w-full">
        <p className="text-2xl font-bold text-center mb-12 uppercase text-warning">
          Our Achievement
        </p>
        <div className="grid gap-10 justify-center items-center grid-cols-5 md:grid-cols-5 sm:grid-cols-2 mb-10">
          {achievements.map((x) => {
            return <Achievement key={x.cnt} props={x}></Achievement>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;
