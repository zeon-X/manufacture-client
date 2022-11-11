import React from "react";
import ProductCard2 from "../ProductCard/ProductCard2";

const ProductDetails1 = () => {
  const products = {
    img: "",
    gallary_img: ["", ""],
    title: "",
    unit_price: 10,
    description: "",
    stock: 100000,
    specification: [
      {
        key: "",
        value: "",
      },
      {
        key: "",
        value: "",
      },
    ],
    mcq: 1100,
  };

  const specification = [
    {
      key: "Description",
      value:
        "Lorem Ipsum es simplemente el texto de relleno dleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno",
    },
    {
      key: "Shipping Policy",
      value:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno",
    },
  ];
  return (
    <div>
      {/* starting part */}
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-start gap-10">
        {/* image part */}
        <div className="lg:w-5/12 md:w-5/12 sm:w-full flex flex-col gap-6 justify-centers items-center">
          <img
            className="w-auto  border border-gray-300"
            src="https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138"
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
          <p className="text-2xl font-bold">Simple Product</p>
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
          <p className="my-4 text-lg font-bold">$220.00</p>
          <p className="my-4 text-sm ">
            SKU:
            <br /> En el valle, la vivienda en la vigilancia específica, el
            reemplazo o la consolidación de la cama, un hombre obsesionado con
            la reducción de opciones de apuestas ilegales. Wow, mercado muy
            atractivo, de mis visitantes. Tiempo de desarrollo reciente para
            odiar, un bar beef tiempo.
          </p>
          <div className="flex justify-start items-center gap-5 mt-14">
            <input
              type="text"
              placeholder="Quantity"
              className="input input-bordered input-primary w-24 max-w-xs rounded-none input-sm"
            />
            <button className="btn btn-sm btn-warning rounded-none text-white">
              Add To Cart
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
            {specification.map((x) => {
              return (
                <tr>
                  <td className="border border-gray-200 p-4">{x.key}</td>
                  <td className="border border-gray-200 p-4">{x.value}</td>
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
    </div>
  );
};

export default ProductDetails1;
