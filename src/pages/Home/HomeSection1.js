import React from "react";
import "./Home.css";

const HomeSection1 = () => {
  return (
    <section className="lg:flex w-full gap-10 mb-16">
      <div className="lg:w-8/12 sm:w-full flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center items-center p-10 home_sec1_hero border border-red-600">
        <div className="lg:order-1 sm:order-2 w-full">
          <p className="text-2xl">Big Sale</p>
          <p className="text-4xl font-bold my-4">
            Hand Tools <br />
            Power Saw Machine
          </p>
          <p className="text-xs mb-4">
            DEWALT 12 Volt Max 3-8 in Cordless Drill Charger Included
          </p>
          <button className="btn btn-warning">SHOP NOW</button>
        </div>
        <div className="lg:order-2 sm:order-1 w-full mb-0 sm:mb-6 flex justify-center">
          <img
            className="lg:w-72 lg:h-72 sm:w-44 sm:h-44s"
            src="https://mobileimages.lowes.com/productimages/65f67ee4-4be3-470e-a78f-a2a5b5a985ba/00617143.jpg?size=pdhism"
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-4/12 sm:w-full sm:mt-10 lg:mt-0 flex flex-col justify-center items-center gap-y-10">
        <div className="border border-red-600 w-full flex items-center justify-evenly p-6">
          <div>
            <p className="text-lg">New Production</p>
            <p className="text-2xl font-bold">
              4PCS Wood
              <br /> Hole Saws
            </p>
            <p className="text-xl font-bold">
              <span className="text-sm font-normal"> From : </span>$60.99
            </p>
          </div>
          <img
            className="w-36 h-36"
            src="https://ph-test-11.slatic.net/p/ad3c30bf67ae4c320e42a1a0d027357d.png"
            alt=""
          />
        </div>
        <div className="border border-red-600 w-full flex items-center justify-evenly p-6">
          <div>
            <p className="text-lg">New Production</p>
            <p className="text-2xl font-bold">
              New Tools
              <br />
              Wood Cutter
            </p>
            <p className="text-xl font-bold">
              <span className="text-sm font-normal"> From : </span>$60.99
            </p>
          </div>
          <img
            className="w-36 h-36"
            src="https://xtrapowertools.com/wp-content/uploads/2021/01/xpt-449-4.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
