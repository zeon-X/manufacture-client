import React from "react";

const Orders = () => {
  let purchase = [
    {
      img: "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
      title: "Las Hot Palabras",
      unit_price: 1900,
      mcq: 100,
      quantity: 200,
      total: 380000,
      payment: "unpaid",
    },
    {
      img: "https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Electrical-Tester-Screwdriver-PNG-Transparent-Image.png",
      title: "Tester Las Hot Palabras",
      unit_price: 10,
      quantity: 5000,
      mcq: 1000,
      total: 50000,
      payment: "paid",
    },
    {
      img: "https://www.kleintools.com/sites/all/product_assets/hires/klein/et100_photo.jpg",
      title: "Multimeter Las Hot Palabras",
      unit_price: 300,
      quantity: 1000,
      total: 300000,
      mcq: 500,
      payment: "unpaid",
    },
    {
      img: "https://www.kindpng.com/picc/m/181-1811383_framing-hammer-png-download-transparent-background-hammer-png.png",
      title: "Hammer Las Hot Palabras",
      unit_price: 50,
      quantity: 1500,
      total: 75000,
      mcq: 1000,
      payment: "unpaid",
    },
  ];
  let delivery_charge = 2000;
  let subtotal = 0;

  purchase.map((x) => {
    subtotal += x.quantity * x.unit_price;
  });
  let grandtotal = subtotal + delivery_charge;
  return (
    <div className="my-16 lg:px-16 sm:px-4">
      <p className="text-2xl font-semibold underline ml-4 mb-6">My Orders</p>
      {/* purchase products */}
      <div className="overflow-auto p-4 shadow-xl rounded border border-dashed border-gray-100">
        <table className="border-collaspe border border-gray-300 w-full ">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 ">Image</th>
              <th className="p-2 border border-gray-300 ">Product</th>
              <th className="p-2 border border-gray-300 ">Price</th>
              <th className="p-2 border border-gray-300 ">Quantity</th>
              <th className="p-2 border border-gray-300 ">Total</th>
              <th className="p-2 border border-gray-300 ">Payment</th>
              <th className="p-2 border border-gray-300 ">Remove</th>
            </tr>
          </thead>
          <tbody>
            {purchase.map((x) => {
              return (
                <tr key={x.img}>
                  <td align="center" className="p-2 border border-gray-300">
                    <img className=" w-16 h-16" src={x.img} alt="" />
                  </td>
                  <td className="p-2 border border-gray-300 ">{x.title}</td>
                  <td className="p-2 border border-gray-300 content-between text-center">
                    {x.unit_price}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    <input
                      value={x.quantity}
                      type="number"
                      placeholder="Quantity"
                      className="input input-bordered w-24"
                      disabled={x.payment === "paid" ? true : false}
                    />
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {x.unit_price * x.quantity}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {x.payment === "paid" ? (
                      <button disabled className="btn btn-xs ">
                        paid
                      </button>
                    ) : (
                      <button className="btn btn-xs btn-success"> pay </button>
                    )}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    <button className="btn btn-sm btn-circle ">
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* purchase total */}
      {/* <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between gap-10 mt-10">
        <div className="gap-6 hidden lg:flex md:flex">
          <button className="btn btn-warning rounded-none">
            Update Purchase
          </button>
          <button className="btn btn-warning rounded-none">
            Continue Shopping
          </button>
        </div>

        <div className=" text-gray-700">
          <p className="text-2xl underline font-extrabold">PURCHASE-TOTALS</p>
          <div className="text-sm font-extrabold flex justify-between items-center mt-6">
            <p>SUBTOTAL:</p>
            <p className="text-warning">${subtotal}</p>
          </div>
          <div className="text-sm font-extrabold flex justify-between items-center mb-3">
            <p>DELIVERY COST:</p>
            <p className="text-warning">${delivery_charge}</p>
          </div>
          <div className="text-lg font-extrabold flex justify-between items-center">
            <p>GRAND TOTAL:</p>
            <p className="text-warning">${grandtotal}</p>
          </div>
          <div className="flex lg:justify-between sm:justify-start md:justify-between items-center mt-10">
            <p></p>
            <button className="btn btn-warning rounded-none btn-wide">
              Comfirm Order
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Orders;
