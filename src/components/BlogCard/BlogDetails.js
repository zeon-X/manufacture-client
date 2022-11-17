import React from "react";
import { useLocation } from "react-router-dom";
import BlogCard1 from "../../components/BlogCard/BlogCard1";

const BlogDetails = () => {
  const blogData = [
    {
      img: "https://process.filestackapi.com/cache=expiry:max/resize=width:600/ZUH1nImOQdSIirQ14lyX",
      title: "How will you improve the performance of a React Application?",
      host: "Programming Hero, Aleeha Tech, BD",

      ans: "1. Using Immutable Data Structures Function/Stateless Components and React.PureComponent 3.Multiple Chunk Files 4.Using Production Mode Flag in Webpack 5.Dependency optimization 6. Use React.Fragments to Avoid Additional HTML Element Wrappers 7. Avoid Inline Function Definition in the Render Function. 8. Throttling and Debouncing Event Action in JavaScript 9. Avoid using Index as Key for map  10. Avoiding Props in Initial States 11. Spreading props on DOM elements 12. Use Reselect in Redux to Avoid Frequent Re-render  13. Avoid Async Initialization in componentWillMount()  14. Memoize React Components  15. CSS Animations Instead of JS Animations  16. Using a CDN 17. Using Web Workers for CPU Extensive Tasks 18. Virtualize Long Lists  19. Analyzing and Optimizing Your Webpack Bundle Bloat  20. Consider Server-side Rendering  21. Enable Gzip Compression on Web Server Conclusion There are many ways to optimize a React app, for example lazy loading components, using ServiceWorkers to cache application state, considering SSR, avoiding unnecessary renders etc.. That said, before considering optimization, it’s worth understanding how React components work, understanding diffing algorithms, and how rendering works in React. These are all important concepts to take into consideration when optimizing your application.",
    },
    {
      img: "https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/how-to-manage-state-react.png",
      title:
        "What are the different ways to manage a state in a React application?",
      host: "Programming Hero, Aleeha Tech, BD",

      ans: "The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps: Local state Global state Server state URL state",
    },
    {
      img: "https://www.educative.io/api/page/6187859468877824/image/download/5404262147293184",
      title: "How does prototypical inheritance work?",
      host: "Programming Hero, Aleeha Tech, BD",

      ans: "JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript While this confusion is often considered to be one of JavaScripts weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented. Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.",
    },
    {
      img: "https://blog.autify.com/static/84ac8b56a04924ac3a0f6a5dd94b3df3/3b2f8/unit-testing-life-cycle.png",
      title: "What is a unit test? Why should write unit tests?",
      host: "Programming Hero, Aleeha Tech, BD",

      ans: "Some developers underestimate the importance of writing unit tests. What follows are five benefits of unit testing that you may want to consider before forming your own opinion. Any bugs are found easily and quicker Code covered with tests is more reliable than the code without. If a future change breaks something in the code, developers will be able to identify the root of the problem right away rather than coming through an unwieldy codebase to find the issue. Best practices suggest that developers first run all unit tests or a group of tests locally to make sure any coding changes don’t disrupt the existing code. However, consider the human factor: A developer might forget to run unit tests after making changes and submit potentially non-working code to a common branch. To avoid this, many companies apply a continuous development approach. Tools for continuous integration are used for this, allowing developers to run unit tests automatically. Thus, any unwanted changes in the code will be detected by a cold, logical machine. The speed of detecting non-working code depends on the tools used for continuous integration. Tests can be set to run either a one-time check at a certain time interval or can be run immediately in real-time to review changes In short, unit tests help developers detect problems immediately, then fix them quickly. With fewer resources spent finding bugs, teams can move on to the next phase of a project.  Unit testing saves time and money Unit testing provides documentation R2: Reusable and Reliable",
    },
    {
      img: "https://daveceddia.com/images/useState-hook-twitter.png",
      title:
        "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts",
      host: "Programming Hero, Aleeha Tech, BD",

      ans: "One should never update the state directly because of the following reasons:If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components. ",
    },
  ];
  const location = useLocation();
  let id = parseInt(location?.search?.split("=")[1]);
  console.log(blogData[id]);
  let blog = blogData[id];
  return (
    <div className="w-full lg:px-20 sm:px-4 my-20">
      <div className="my-16 flex lg:flex-row sm:flex-col gap-10">
        <div className="md:w-full sm:w-full lg:w-8/12">
          <img className="w-full" src={blog?.img} alt="" />
          <p className="text-sm font-semibold my-6">{blog?.title}...</p>
          <p className="text-sm">{blog?.ans}</p>
        </div>

        <div className="md:w-full sm:w-full lg:w-4/12">
          <div className="border border-gray-200 p-2 flex my-4">
            <p className="font-bold text-xs">Read More From Here</p>
          </div>
          <div className="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 ">
            {blogData.map((x, index) => {
              if (index != id)
                return <BlogCard1 key={index} id={index} props={x}></BlogCard1>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
