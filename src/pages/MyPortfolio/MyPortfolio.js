import React from "react";
import img from "../../assets/myportfolio/1903147P.jpg";
import DataCard from "../../components/DataCard/DataCard";
import ProjectCard from "../../components/DataCard/ProjectCard";
const MyPortfolio = () => {
  const skilldata = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/8915/8915829.png",
      title: "Problem Solving",
      details: "Overall Solved problem: 500+",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/7991/7991055.png",
      title: "Web Development",
      details:
        "MongoDB, Mongoose, Express.JS, Node.JS, React.JS, React Tailwind, React Bootstrap, html, CSS, ES6.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/365/365779.png",
      title: "Language",
      details: "C, C++, JavaScript, Node.js, Java, Python",
    },

    {
      img: "https://cdn-icons-png.flaticon.com/512/2808/2808331.png",
      title: "Internet of Things",
      details: "I'm working on sevarel projects on IoT",
    },
  ];
  const projectdata = [
    {
      img: "https://i.ibb.co/8X5jJnD/Screenshot-2022-11-14-at-18-59-01-Menufacturer-Tools.png",
      title: "full stack development of an menufacturer website",
      details:
        "website has to be a tools manufacturer. The tool manufacturers could manufacture carpentry tools, masonry tools, electric tools, metalwork tools, or any tool. Some examples of tools could be a hammer, drill machine, screwdriver, wrench, Pliers, Measuring Tape, Chisel, Soldering Iron, shovel, electric saw, hacksaw, paint roller, paintbrush, sandpaper, nut, bolts, drill bit, clamp, workbench, nail gun, glue gun, etc.",
      githubLink: "https://github.com/zeon-X/manufacture-client",
      link: "https://manufacture-web-app.web.app",
    },
    {
      img: "https://user-images.githubusercontent.com/73699852/193410165-c775f462-d784-4159-8eda-270d04a95bee.png",
      title: "Pocket-Money-Manager-Android-App",
      details:
        "It's an Life-style App that tracks notes on daily transactions & presents reports on Daily/Weekly/Monthly basis. This app become too popular as there are many people who can't track their daily expense/income money. This app provides that facilities in a more easy & sophisticated way. ",
      githubLink: "https://github.com/zeon-X/Pocket-Money-Manager-Android-App",
      link: "https://github.com/zeon-X/Pocket-Money-Manager-Android-App",
    },
    {
      img: "https://i.ibb.co/JQ0hXs9/Screenshot-2022-11-14-at-18-55-27-Isbaah-com-Inventory.png",
      title: "Book-wear-house-management-dashboard",
      details:
        "Programming Hero Course Assignment No 11. This repo contains the client side of a book wearhouse management system.",
      githubLink:
        "https://github.com/zeon-X/book-wear-house-management-dashboard",
      link: "isbaah-book-wearhouse.web.app/",
    },
    {
      img: "https://i.ibb.co/Bg6FN5H/170592940-8452b121-19b7-48af-ae49-bdcc5c5d7986.png",
      title: "Weeding-Art-Photography-Booking-Site ",
      details:
        "E-commerce & Landing page for an Photography Team. Project was done with React.JS, Firebase, React-Tailwind. Site is responsive for large screens/laptop or monitor & small screen/sm mobile ",
      githubLink:
        "https://github.com/zeon-X/Weeding-Art-Photography-Booking-Site",
      link: "weeding-art-bd-zeonx.firebaseapp.com/ ",
    },
  ];
  const awarddata = [
    {
      img: "https://play-lh.googleusercontent.com/TqjY4y7Ts9HpgkcLf86ln2hg_nXCKPLqbQlKghqQipeFOw-QMUIxRGXVxd5f6MHzopU",
      title: "Joining bdapps national Hackathon program",
      details:
        "I joined with one of my start-up idea & presented my idea & business models",
    },
    {
      img: "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/306796631_108480718676711_1970927754756576090_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGjslc_TMkAD_a5CSmrw_EXgBs5cwB0FwOAGzlzAHQXAxYIPamBI5rGNo2Ep1_KjUU0vVdGjx4qgSPpsGbhJQ6m&_nc_ohc=PDuaC_JoyHQAX_IVzWI&tn=7pGCAFdT9yUT0N3E&_nc_ht=scontent.fdac22-1.fna&oh=00_AfANZQlKDZFkHHU3dqjmdAXJk7RC4qWDNSnVgoTqLCBSsA&oe=6376A8AE",
      title: "RUET IoT Club",
      details:
        "The Internet of Things is a revolutionary aspect of the Internet since it is thought to be responsible for developing all future technologies. Researchers are working very hard to develop this technology",
    },
  ];
  const hobbydata = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/2821/2821715.png",
      title: "Developing Business Ideas",
      details: "I love to do that",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2516/2516644.png",
      title: "Agro Firming Development with IoT",
      details: "I love to do that",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1027/1027179.png",
      title: "Cooking",
      details: "I love to do that",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2491/2491931.png",
      title: "Travelling",
      details: "I love to do that",
    },
  ];
  return (
    <div className="w-full mb-16 flex flex-col justify-center items-center lg:px-20 py-16 sm:px-8">
      {/* starting */}
      <div className="flex lg:flex-row sm:flex-col lg:justify-between md:justify-between sm:justify-center w-full">
        <div className="text-sm lg:order-1 md:order-1 sm:order-2">
          <p className="text-3xl font-bold text-black">Md. Shefat Zeon</p>
          <p className="text-lg font-semibold text-blue-800">
            FULL-STACK DEVELOPER | MERN
          </p>
          <div className="flex badge mt-3 mb-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <p className="ml-1 ">Phone: +8801402-199906</p>
          </div>
          <div className="flex badge">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <p className="ml-1 ">Email: mdshefatzeon@gmail.com</p>
          </div>
          {/* social */}
          <div className="flex gap-3 mt-4">
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <img
          className="w-44 h-44  lg:order-2 md:order-2 sm:order-1"
          src={img}
          alt=""
        />
      </div>

      <p className="text-sm my-6">
        As a Full Stack Developer, my work with application and technical
        architects to translate a business need into a robust and integrated
        technology solution. I work in a fast-paced environment solving unique
        and challenging software problems and developing innovative solutions.
        My objective is simply to be the best web developer that I can be and to
        contribute to the technology industry all that I know and can do. I am
        dedicated to perfecting my craft by learning from more seasoned
        developers, remaining humble, and continuously making strides to learn
        all that I can about development.
      </p>
      <div className="border w-full border-gray-200 my-3 p-2 flex justify-between items-center">
        <p className="font-bold">Education</p>
      </div>
      <table className="w-full text-sm border-collapse p-2  border border-gray-300">
        <thead>
          <tr>
            <th className=" p-2  border border-gray-300 w-3/12">Time</th>
            <th className=" p-2  border border-gray-300 w-9/12">Institute</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2  border border-gray-300">2020.01 - Present </td>
            <td className=" p-2  border border-gray-300">
              BSc. in Computer Science & Engineering (CSE) <br /> Rajshahi
              University of Engineering & University (RUET), Rajshahi,
              Bangladesh <br /> Major: Computer Programing, Problem Solving,
              Object Oriented Programming, Data Structure, Numerical Methods,
              Discrete Mathematics, C, C++, Java <br /> Minor: Differential
              Calculus, Integral Calculus, Physics, Functional English,
              Economics, Accounting, Management, Chemistry, Analog Electronics,
              Basic Electronics. <br /> Session: 2020-2025 <br /> Result: CGPA
              3.48
            </td>
          </tr>
          <tr>
            <td className=" p-2  border border-gray-300">2017.06 – 2019.04 </td>
            <td className=" p-2  border border-gray-300">
              Higher Secondary in Science (HSC) <br /> Dhaka College, Dhaka,
              Bangladesh <br />
              Major: Mathematics, Physics, Chemistry, Biology, ICT <br />{" "}
              Session: 2017-2018 <br /> Result: GPA 5.00
            </td>
          </tr>
          <tr>
            <td className=" p-2  border border-gray-300">2015.01 – 2017.02 </td>
            <td className=" p-2  border border-gray-300">
              Secondary in Science (SSC) <br /> Bhuapur Pilot High School,
              Bhuapur, Tangail, Bangladesh <br /> Major: Mathematics, Physics,
              Chemistry, Biology, ICT <br />
              Session: 2012-2017 <br />
              Result: GPA 5.00
            </td>
          </tr>
        </tbody>
      </table>

      {/* skill */}
      <div className="w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">Skills</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {skilldata.map((x, index) => {
          return <DataCard key={index} props={x}></DataCard>;
        })}
      </div>

      {/* project */}
      <div className="w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">Best 4 of My Projects</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {projectdata.map((x, index) => {
          return <ProjectCard key={index} props={x}></ProjectCard>;
        })}
      </div>

      {/* award */}
      <div className="w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">
          Competitive Program & Other Program attended
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {awarddata.map((x, index) => {
          return <DataCard key={index} props={x}></DataCard>;
        })}
      </div>

      {/* hobby */}
      <div className="w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">Hobby</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 w-full">
        {hobbydata.map((x, index) => {
          return <DataCard key={index} props={x}></DataCard>;
        })}
      </div>
    </div>
  );
};

export default MyPortfolio;
