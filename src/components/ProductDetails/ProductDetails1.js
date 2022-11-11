import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard2 from "../ProductCard/ProductCard2";

const ProductDetails1 = () => {
  const navigate = useNavigate();
  const product = JSON.parse(localStorage.getItem("purchase"));
  let products = [
    {
      img: "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
      title: "Las Hot Palabras",
      gallary_img: [],
      unit_price: 1900,
      description:
        "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W charger for Iphone 11 12",
      specification: [{ key: "", value: "" }],
      mcq: 100,
      stock: 1000,
    },
    {
      img: "https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Electrical-Tester-Screwdriver-PNG-Transparent-Image.png",
      title: "Tester Las Hot Palabras",
      gallary_img: [],
      unit_price: 10,
      description:
        "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W ch",
      specification: [{ key: "", value: "" }],
      mcq: 1000,
      stock: 400000,
    },
    {
      img: "https://www.kleintools.com/sites/all/product_assets/hires/klein/et100_photo.jpg",
      title: "Multimeter Las Hot Palabras",
      gallary_img: [],
      unit_price: 300,
      description:
        "Wholesale mobildapter fast USB charger Type C 18W PD 20W ch",
      specification: [{ key: "", value: "" }],
      mcq: 500,
      stock: 10000,
    },
    {
      img: "https://www.kindpng.com/picc/m/181-1811383_framing-hammer-png-download-transparent-background-hammer-png.png",
      title: "Hammer Las Hot Palabras",
      gallary_img: [],
      unit_price: 50,
      description:
        "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W chWholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W ch",
      specification: [{ key: "", value: "" }],
      mcq: 1000,
      stock: 1000,
    },
  ];

  // const product = {
  //   img: "https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138",
  //   gallary_img: ["", ""],
  //   title: "Simple Product View",
  //   unit_price: 10,
  //   description:
  //     "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W charger for Iphone 11 12",
  //   stock: 100000,
  //   specification: [
  //     {
  //       key: "Description",
  //       value:
  //         "Lorem Ipsum es simplemente el texto de relleno dleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno",
  //     },
  //     {
  //       key: "Shipping Policy",
  //       value:
  //         "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno",
  //     },
  //   ],
  //   mcq: 1100,
  // };

  return (
    <div className="w-full lg:px-20 sm:px-4 my-20">
      {/* starting part */}
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-start gap-10">
        {/* image part */}
        <div className="lg:w-5/12 md:w-5/12 sm:w-full flex flex-col gap-6 justify-centers items-center">
          <img
            className="w-auto  border border-gray-300"
            src={product.img}
            alt=""
          />
          <div className="grid grid-cols-4 gap-2 ">
            <button>
              <img
                className="border border-gray-300"
                src="https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138"
                alt=""
              />
            </button>
            <button>
              <img
                className="border border-gray-300"
                src="https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138"
                alt=""
              />
            </button>
            <button>
              <img
                className="border border-gray-300"
                src="https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138"
                alt=""
              />
            </button>
            <button>
              <img
                className="border border-gray-300"
                src="https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138"
                alt=""
              />
            </button>
          </div>
        </div>
        {/* des part */}
        <div className="lg:w-7/12 md:w-7/12 sm:w-full">
          <p className="text-2xl font-bold">{product?.title}</p>
          {/* rating */}
          <div className="flex justify-start items-center my-1">
            <div className="rating rating-xs ">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-sm ml-4">No Reviews</p>
          </div>
          <p className="mt-4 text-lg font-bold">
            Price: ${product?.unit_price}/unit.
            <span className="text-xs font-normal">( MCQ: {product?.mcq} )</span>
          </p>
          <p className="text-sm font-normal mb-4">
            Available: {product?.stock} unit
          </p>
          <p className="my-4 text-sm ">
            SKU:
            <br /> {product?.description}
          </p>
          <div className="flex justify-start items-center gap-5 mt-14">
            <input
              type="text"
              placeholder="Quantity"
              className="input input-bordered input-primary w-24 max-w-xs rounded-none input-sm"
            />
            <button
              onClick={() => navigate("/purchase")}
              className="btn btn-sm btn-warning rounded-none text-white"
            >
              Purchase
            </button>
            <button className="btn btn-sm btn-warning rounded-none text-white">
              Add To Wishlish
            </button>
          </div>
        </div>
      </div>
      {/* eending part */}
      <div className="mt-10  ">
        <table className="border-collapse border border-slate-500 w-full text-sm ">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2 w-4/12">
                Specification
              </th>
              <th className="border border-gray-200 p-2 w-8/12">Details</th>
            </tr>
          </thead>
          <tbody>
            {product?.specification.map((x) => {
              return (
                <tr>
                  <td className="border border-gray-200 p-4">{x?.key}</td>
                  <td className="border border-gray-200 p-4">{x?.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* related products */}
      <div className="mt-16">
        <div className="border border-gray-200 my-6 p-3 flex justify-between items-center">
          <p className="font-bold">Related Products</p>
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

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {products.map((x) => {
            return <ProductCard2 key={x.img} props={x}></ProductCard2>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails1;
