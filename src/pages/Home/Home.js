import React from "react";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HomeSection1></HomeSection1>
      <HomeSection2></HomeSection2>
      <HomeSection3></HomeSection3>
      <HomeSection4></HomeSection4>
      <HomeSection5></HomeSection5>
    </div>
  );
};

export default Home;
