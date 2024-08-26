"use client";

import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaFireAlt, FaCircleNotch } from "react-icons/fa";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [login, setLogin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Determine if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming 768px is the breakpoint for mobile
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // Add search logic here
  };

  const handleLogin = () => {
    console.log("Login button clicked");
    // Add login logic here
  };

  const handleSignup = () => {
    console.log("Sign up button clicked");
    // Add signup logic here
  };

  return (
    <>
      {isMobile ? (
        <div className='flex flex-col items-center justify-center w-full p-3 text-black'>
          <div className="flex items-center justify-between w-full px-5 gap-6 md:gap-5">
            <div className="font-semibold text-xl md:text-2xl">LearnX</div>

            {login ? (
              <div className="flex gap-1 md:gap-2 items-center border border-black rounded-full px-2 md:px-3 py-2 text-xs md:text-sm">
                <div className="flex items-center gap-1 md:gap-2">
                  <FaFireAlt size={14} />
                  <span>0 days</span>
                </div>
                <div className="w-px h-4 bg-black"></div>
                <div className="flex items-center gap-1 md:gap-2">
                  <FaCircleNotch size={14} />
                  <span>0 min</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-3">
                <div
                  className="px-2 md:px-5 py-2 rounded-lg border border-black text-center cursor-pointer hover:bg-black hover:text-white transition text-xs md:text-sm"
                  onClick={handleLogin}
                >
                  Login
                </div>
                <div
                  className="px-2 md:px-5 py-2 rounded-lg border border-violet-200 text-center cursor-pointer hover:bg-black hover:text-white transition text-xs md:text-sm bg-violet-600 text-white"
                  onClick={handleSignup}
                >
                  Sign up
                </div>
              </div>
            )}
          </div>

          <div className="relative w-full max-w-[300px] sm:max-w-[270px] mt-4">
            <input
              type="search"
              placeholder="What do you want to learn"
              className="bg-transparent border rounded-full pl-10 pr-4 py-2 text-xs md:text-sm text-neutral-700 w-full border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div
              className="absolute top-2 left-2.5 md:top-2.5 md:left-3 text-neutral-500 cursor-pointer"
              onClick={handleSearch}
            >
              <IoSearchOutline size={18} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-transparent w-full">
          <div className="flex w-full max-w-screen-lg items-center justify-between px-4 text-black p-2">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-5 w-full p-1 sm:p-2 md:p-3">
              <div className="font-semibold text-lg sm:text-xl md:text-2xl text-black">LearnX</div>

              <div className="relative w-[200px] sm:w-[250px] md:w-[270px]">
                <input
                  type="search"
                  placeholder="What do you want to learn"
                  className="bg-transparent border rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm md:text-base text-neutral-700 w-full border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div
                  className="absolute top-2.5 sm:top-2.5 md:top-3 left-2.5 sm:left-3 md:left-3 text-neutral-500 cursor-pointer"
                  onClick={handleSearch}
                >
                  <IoSearchOutline size={18} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end  w-full gap-1 sm:gap-2 md:gap-3">
              <div className="flex gap-1 sm:gap-1.5 md:gap-2 items-center border border-black rounded-full px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base">
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <FaFireAlt size={14} />
                  <span>0 days</span>
                </div>
                <div className="w-px h-4 bg-black"></div>
                <div className="flex items-center  gap-1 sm:gap-1.5 md:gap-2">
                  <FaCircleNotch size={14} />
                  <span>0 min</span>
                </div>
              </div>
              <div
                className="px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg border border-black text-center cursor-pointer hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-base"
                onClick={handleLogin}
              >
                Login
              </div>
              <div
                className="px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg border border-violet-100 text-white text-center cursor-pointer hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-base bg-violet-600"
                onClick={handleSignup}
              >
                Sign up
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
