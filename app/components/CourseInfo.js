import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";


const CourseInfo = () => {
  return (
    <div className="mb-6 w-1/2">
      <span className="border bg-orange-200 font-semibold text-sm  text-orange-500 rounded-full w-28 p-2 flex items-center gap-2"><BsFillLightningChargeFill color="orange" />
       Tranding</span>
      <h1 className="text-3xl font-bold text-white mb-2 mt-5 ">Mega Digital Marketing Course A-Z: 32 Courses in 1 + Updates</h1>
      <p className="text-neutral-300 text-sm py-10 font-medium mb-4 ">Master Digital Marketing: Develop strategies for Social Media, WordPress, SEO, and Ads. Learn to leverage ChatGPT, optimize Email campaigns, and enhance your presence on Instagram, Facebook, and YouTube.</p>
    </div>
  );
};

export default CourseInfo;


