import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a3d] text-white py-10 text-center">

      <div className="mb-10 flex p-16">
        <div className="mb-5">
          <h2 className="text-4xl text-start">Master the art of selling with our premium <span className='italic font-thin'>learnings</span></h2>
        </div>
        <div className="flex justify-around mb-5 flex-wrap">
          <div className="flex-1 mx-2">
            <h3 className="text-2xl mb-2">25K+</h3>
            <p className="text-sm">Hours of quality content available to elevate your marketing skills</p>
          </div>
          <div className="flex-1 mx-2">
            <h3 className="text-2xl mb-2">600K+</h3>
            <p className="text-sm">Members have already enrolled in our courses and are upskilling their marketing knowledge</p>
          </div>
          <div className="flex-1 mx-2">
            <h3 className="text-2xl mb-2">70%</h3>
            <p className="text-sm">Success rate of students completing their courses</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-5 flex justify-around flex-wrap items-center">
        <div className="mb-5 flex items-start flex-col">
          <h3 className="text-5xl">LearnX</h3>
          <div className="flex justify-center mt-5">
          <i className="fab fa-facebook-f mx-2 text-2xl"><FaSquareFacebook /></i>
          <i className="fab fa-instagram mx-2 text-2xl"><FaInstagramSquare /></i>
          <i className="fab fa-linkedin-in mx-2 text-2xl"><FaLinkedin /></i>
        </div>
        <div className="mt-5 text-sm">
        <p>Copyright © 2024 PPC Pros.</p>
      </div>
        </div>
        <div className="flex justify-center mb-5 flex-wrap text-xs ">
          <ul className="mx-3">
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Who We Are</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Services</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Portfolio</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Case Studies</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Contact Us</li>
          </ul>
          <ul className="mx-3">
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Who We Are</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Services</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Portfolio</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Case Studies</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Contact Us</li>
          </ul>
          <ul className="mx-3">
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Who We Are</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Services</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Portfolio</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Case Studies</li>
            <li className="mb-2 cursor-pointer hover:text-neutral-300">Contact Us</li>
          </ul>
        </div>
      
      </div>
      
    </footer>
  );
}

export default Footer;
