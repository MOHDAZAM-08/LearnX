import React from "react";

const PriceInfo = () => {
  return (
    <div className="mb-6  border rounded bg-white">
      <div>
      <video
                  className="w-full h-40 object-cover rounded"
                  src='https://www.w3schools.com/html/movie.mp4'
                >
                  Your browser does not support the video tag.
                </video>
      </div>
      <div className="p-2">
      <h2 className="text-3xl font-bold text-black mb-2 py-2">$22.99 <span className="text-gray-500 line-through text-lg">$139.99</span></h2>
      <button className="w-full bg-purple-600 text-white py-2 rounded-lg mb-2 hover:bg-purple-700 transition duration-300">Buy Now</button>
      <p className="text-red-600 text-sm mb-4">23 hours left at this price!</p>
      <input type="text" placeholder="Enter Coupon Code" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"/>
      <button className="w-full border-violet-800 border text-violet-800 font-semibold py-2 rounded-lg hover:bg-violet-800 hover:text-white ">Apply</button>
      <div>
        <div className="text-violet-800 text-xl py-5">This course includes:</div>
        <div className="text-black text-sm">
          <ul className="list-disc px-7">
            <li>Unlock Your Potential: Enroll in Our Top-Rated Course Today!   </li>
            <li>40x return on investment</li>
            <li>Join Thousands of Successful Students</li>
            <li>70% students report career advancements </li>
            <li>Boost Your Career with Industry-Recognized Certification!</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PriceInfo;
