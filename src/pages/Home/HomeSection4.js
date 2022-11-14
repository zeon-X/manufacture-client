import React from "react";
import { useQuery } from "react-query";
import BlogCard1 from "../../components/BlogCard/BlogCard1";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
import ErrorPage from "../../shared/ErrorPage";
import Loading from "../../shared/Loading";
import axiosInstance from "../../utilities/axiosInstance/axiosInstance";

const HomeSection4 = () => {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery(["productsec4"], async () => {
    let fdata = await axiosInstance.get("product/get?limit=4");
    return fdata.data;
  });

  if (isError) return <ErrorPage msg={error}></ErrorPage>;

  if (isLoading) return <Loading msg="Loading..."></Loading>;

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
  ];
  return (
    <div className="w-full mb-16">
      {/* DELIVERY | 24SUPPORT | MONEY RETURN |DISCOUNT */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-4 border border-gray-300 p-2">
        <div className=" flex justify-center items-center py-4">
          <img
            className="w-16 mr-4"
            src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png"
            alt=""
          />
          <p>
            <span className="font-bold text-sm">FREE DELIVERY</span>
            <br />
            <span className="text-sm">Free shipping on all order</span>
          </p>
        </div>
        <div className=" flex justify-center items-center py-4">
          <img
            className="w-14 mr-4"
            src="https://cdn-icons-png.flaticon.com/512/5167/5167002.png"
            alt=""
          />
          <p>
            <span className="font-bold text-sm">ONLINE SUPPORT 24/7</span>
            <br />
            <span className="text-sm">Support online 24 hours</span>
          </p>
        </div>
        <div className=" flex justify-center items-center py-4">
          <img
            className="w-14 mr-4"
            src="https://cdn-icons-png.flaticon.com/512/2394/2394090.png"
            alt=""
          />
          <p>
            <span className="font-bold text-sm">MONEY RETURN</span>
            <br />
            <span className="text-sm">Back guarantee under 7 days</span>
          </p>
        </div>
        <div className=" flex justify-center items-center py-4">
          <img
            className="w-14 mr-4"
            src="https://cdn-icons-png.flaticon.com/512/2652/2652181.png"
            alt=""
          />
          <p>
            <span className="font-bold text-sm">MEMBER DISCOUNT</span>
            <br />
            <span className="text-sm">Onevery order over $30.00</span>
          </p>
        </div>
      </div>

      {/* BEST SELLER */}
      <div className="mt-16">
        <div className="border border-gray-200 my-6 p-3 flex justify-between items-center">
          <p className="font-bold">Best Seller Products</p>
          <div className="grid grid-cols-2 gap-1">
            <button className="btn btn-sm border border-gray-100 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="btn btn-sm  border border-gray-100 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {products.map((x, index) => {
            return <ProductCard2 key={index} props={x}></ProductCard2>;
          })}
        </div>
      </div>

      {/* BLOG */}
      <div className="mt-16">
        <div className="border border-gray-200 my-6 p-3 flex justify-between items-center">
          <p className="font-bold">From Our Blog</p>
          <div className="grid grid-cols-2 gap-1">
            <button className="btn btn-sm border border-gray-100 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="btn btn-sm  border border-gray-100 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {blogData.map((x, index) => {
            return <BlogCard1 key={index} props={x}></BlogCard1>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
