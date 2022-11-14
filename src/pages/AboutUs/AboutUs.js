import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full lg:px-20 sm:px-4 my-20">
      <img
        src="http://bunniestudios.com/blog/images/arduino_pcbfab_drillrack.jpg"
        alt=""
      />
      <p className="font-bold border border-gray-200 my-6 p-3 ">
        How Our Journey Starts
      </p>
      <p className="text-sm">
        Arduinos are made in Scarmagno, Italy, a small town near the Olivetti
        factories on the outskirts of Torino. All of the circuit board
        fabrication, board stuffing and distribution is handled out of that
        small town. <br />I was really excited to see the factories, and I’d
        like to share some photos of them with you. The highlight of my tour was
        “System Electronica”, the PCB factory which makes the Arduino PCBs.
        <br />
        One charming aspect of System Electronica is the owner has the factory
        painted to match the colors of the Italian flag. <br /> In this wide
        view of the factory floor, you can see some of that in the red and white
        posts down the length of the facility. Arduinos start as huge sheets of
        virgin copper-on-FR4. <br />
        The sheets above are 1.6mm thick (the most common thickness for a PCB,
        which corresponds to 1/16th of an inch), and probably a meter on one
        side by about a meter and a half. <br />
        The first step in processing is to drill the holes: hole drilling is
        done even before patterning. <br />
        This is because once the holes are drilled, you can use the holes to
        align the masks used to pattern the traces later on in the process. Hole
        drilling is also a dirty and messy process, which can damage circuit
        patterns. <br />
        Above is the CNC drilling head used to drill the boards. The blank
        copper sheets are actually stacked three-high so a single pass of the
        drill can produce three substrates. Above is the drill rack used by the
        CNC drilling machine. <br />
        If you’ve ever had to muck around with creating NC-drill files, you’ll
        probably have seen the term “drill rack” used somewhere. This is what it
        looks like.
      </p>
    </div>
  );
};

export default AboutUs;
