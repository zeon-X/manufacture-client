import React from "react";
import ProductCard1 from "../../components/ProductCard/ProductCard1";

const HomeSection2 = () => {
  let products = [
    {
      img: "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
      title: "Las Hot Palabras",
      gallary_img: [
        "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
        "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
        "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
      ],
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
  return (
    <section className="w-full mb-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-10 sm:gap-4">
        {products.map((x) => {
          return <ProductCard1 key={x.title} props={x}></ProductCard1>;
        })}
      </div>

      {/* 2 card on same line */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16">
        <div className="bg1 border border-gray-300 p-10">
          <div className="w-5/12">
            <p className="text-xl font-semibold">Tools Set Adjustable Wrench</p>
            <p className="my-1 text-3xl font-bold">
              <span className="text-lg font-bold">From : </span> $20.87
            </p>
            <p className="text-sm underline hover:cursor-pointer">Shop Now </p>
          </div>
        </div>
        <div className="bg2 border border-gray-300 p-10">
          <div className="w-5/12">
            <p className="text-xl font-semibold">Tools Set Adjustable Wrench</p>
            <p className="my-1 text-3xl font-bold">
              <span className="text-lg font-bold">From : </span> $20.87
            </p>
            <p className="text-sm underline hover:cursor-pointer">Shop Now </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
