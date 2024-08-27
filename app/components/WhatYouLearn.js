import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io"; // Importing the check circle icon

const WhatYouLearn = () => {
  return (
    <div className="bg-white p-9 rounded-lg ">
      <h3 className="text-2xl font-bold text-purple-800 mb-4 ">What you&apos;ll learn</h3>
      <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-gray-800 text-xs">
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Advanced Digital Marketing planning.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>ChatGPT for marketing.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Prompt engineering for marketing.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Build websites & online stores - no coding.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Psychological marketing tactics.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Email Marketing + pro strategies with AI.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Write Copy that Sells (copywriting).</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Skyrocket Traffic & SEO Rankings.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Social media marketing & ads.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Instagram, Facebook, YouTube, LinkedIn.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Google ads & analytics.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Content production for marketing.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Photoshop, Midjourney, Dall-e.</span>
        </div>
        <div className="flex items-center">
          <IoIosCheckmarkCircleOutline className="text-black text-lg  mr-2" />
          <span>Cultivate a Winning Mindset in Business.</span>
        </div>
      </div>
    </div>
  );
};

export default WhatYouLearn;
