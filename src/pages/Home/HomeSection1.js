import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSection1 = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:flex w-full gap-10 mb-16">
      {/* main card */}
      <div className="bgHero lg:w-8/12 sm:w-full flex lg:flex-row md:flex-row sm:flex-col lg:justify-between sm:justify-center items-center p-10 home_sec1_hero shadow-xl">
        <div className="lg:order-1 md:order-1 sm:order-2 w-full">
          <p className="text-2xl">Big Sale</p>
          <p className="text-4xl font-bold my-4">
            Hand Tools <br />
            Power Saw Machine
          </p>
          <p className="text-xs mb-4">
            DEWALT 12 Volt Max 3-8 in Cordless Drill Charger Included
          </p>
          <button onClick={() => navigate("/shop")} className="btn btn-warning">
            SHOP NOW
          </button>
        </div>
        <div className="lg:order-2 md:order-2 sm:order-1 w-full mb-0 sm:mb-6 flex justify-center">
          <img
            className="lg:w-72 lg:h-72 sm:w-44 sm:h-44s"
            src="https://9dbb1f6ce47d4ca3e397-fa5e19980981d5458cd0ea2d7efa41ab.ssl.cf1.rackcdn.com/products/photos/full_b28a90b6-16fd-426f-8e11-773feab72e39.png"
            alt=""
          />
        </div>
      </div>
      {/* 2 sub card */}
      <div className="lg:w-4/12 sm:w-full sm:mt-10 lg:mt-0 flex lg:flex-col md:flex-row sm:flex-col justify-center items-center lg:gap-y-10 md:gap-x-10 sm:gap-y-10">
        <div className="bgHero1sm shadow-xl w-full flex items-center justify-evenly p-6">
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
        <div className="bgHero2sm shadow-xl w-full flex items-center justify-evenly p-6">
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
