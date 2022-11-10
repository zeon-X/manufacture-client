import React from "react";
import BlogCard1 from "../../components/BlogCard/BlogCard1";
import ProductCard2 from "../../components/ProductCard/ProductCard2";

const HomeSection4 = () => {
  const blogData = [
    {
      img: "https://cdn.shopify.com/s/files/1/0111/9115/6794/articles/11.jpg?v=1529747940",
      title:
        "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro",
      host: "Toolkits-3 Admin, On: 12 Jun, 2018",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0111/9115/6794/articles/10.jpg?v=1529747947",
      title: "Es un hecho establecido hace demasiado tiempo que un lector se",
      host: "Toolkits-3 Admin, On: 12 Jun, 2018",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0111/9115/6794/articles/9.jpg?v=1529747957",
      title:
        "Orem Ipsum ha sido el texto de relleno estándar de las industrias desde",
      host: "Toolkits-3 Admin, On: 12 Jun, 2018",
    },
  ];
  return (
    <div className="w-full mb-16">
      {/* DELIVERY | 24SUPPORT | MONEY RETURN |DISCOUNT */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 justify-center items-center gap-4 border border-gray-300 p-2">
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

        <div className="grid lg:grid-cols-4 sm:grid-cols-1">
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
          <ProductCard2></ProductCard2>
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

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
          {blogData.map((x) => {
            return <BlogCard1 props={x}></BlogCard1>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
