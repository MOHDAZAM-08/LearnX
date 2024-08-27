import React from "react";
import { MdOndemandVideo } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { GrNote } from "react-icons/gr";
import { FiDownload } from "react-icons/fi";
import { CiMobile3 } from "react-icons/ci";
import { RiInfinityFill } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";

const CourseIncludes = () => {
  return (
    <div className="bg-white px-10 py-5 rounded-lg border text-black w-full">
      <h2 className="text-xl font-semibold mb-4 text-purple-800">This course includes:</h2>
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div className="flex items-center">
          <i className="fas fa-video text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><MdOndemandVideo className="text-xl" /> 72 hours on-demand video</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-download text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><FiDownload className="text-xl" />111 downloadable resources</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-clipboard-check text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><FaArrowTrendUp className="text-xl" />1 practice test</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-mobile-alt text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><CiMobile3 className="text-xl" />Access on mobile and TV</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-tasks text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><MdOutlineAssignment className="text-xl" />Assignments</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-infinity text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><RiInfinityFill className="text-xl"  />Full lifetime access</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-file-alt text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><GrNote className="text-xl"  />23 articles</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-certificate text-purple-700 mr-3"></i>
          <span className="flex items-center gap-2"><TfiCup className="text-xl" />Certificate of completion</span>
        </div>
      </div>
    </div>
  );
};

export default CourseIncludes;
