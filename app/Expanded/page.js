import React from 'react'
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";
import CourseInfo from "../components/CourseInfo";
import PriceInfo from "../components/PriceInfo";
import WhatYouLearn from "../components/WhatYouLearn";
import CourseIncludes from "../components/CourseIncludes";
import CourseContent from "../components/CourseContent";
import SuccessStory from "../components/SuccessStory";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


export default function page() {



const courseData = [
    {
      title: 'Introduction to Digital Marketing',
      duration: 23,
      lectures: [
        { title: 'Introduction to Digital Marketing', duration: '08:38' },
        { title: 'Links you need', duration: '-' },
        { title: 'What is digital marketing?', duration: '02:48', icon: 'fas fa-play-circle text-blue-500' },
        { title: '4 steps of digital marketing', duration: '06:38', icon: 'fas fa-play-circle text-blue-500' },
        { title: 'The Marketing Fundamentals Quiz', duration: '4 Questions' },
        { title: '5 Tips to use the course better', duration: '05:03' },
      ],
    },
    {
      title: 'Market research',
      duration: 60,
      lectures: [
        { title: 'Market research overview', duration: '15:00' },
        // Add more lectures here
      ],
    },
    {
      title: 'ChatGPT fundamentals',
      duration: 22,
      lectures: [
        { title: 'Introduction to ChatGPT', duration: '05:00' },
        // Add more lectures here
      ],
    },
    {
      title: 'ChatGPT fundamentals',
      duration: 22,
      lectures: [
        { title: 'Introduction to ChatGPT', duration: '05:00' },
        // Add more lectures here
      ],
    },
    {
      title: 'ChatGPT fundamentals',
      duration: 22,
      lectures: [
        { title: 'Introduction to ChatGPT', duration: '05:00' },
        // Add more lectures here
      ],
    },
    // Add more sections as needed
  ];


  const ratings = {
    score: 4.6,
    total: 17383,
  };

  const surveyResults = [
    { label: "Strongly agree", percentage: 80 },
    { label: "Agree", percentage: 20 },
    { label: "Somewhat", percentage: 0 },
    { label: "Not Really", percentage: 0 },
  ];

  const testimonials = [
    {
      name: "Hanzala R.",
      avatar: "https://via.placeholder.com/40",
      rating: 4.7,
      comment: "This is the best course I've ever taken. Pouya isn’t just teaching us about cognitive biases and how to persuade people to buy our products or services; he's also covering many aspects of copywriting. Both of these...",
    },
    {
      name: "Jane D.",
      avatar: "https://via.placeholder.com/40",
      rating: 4.8,
      comment: "An outstanding course that covers everything I needed to know. The practical insights provided were incredibly valuable...",
    }, {
      name: "Abc D.",
      avatar: "https://via.placeholder.com/40",
      rating: 4.8,
      comment: "An outstanding course that covers everything I needed to know. The practical insights provided were incredibly valuable...",
    }, {
      name: "Bef D.",
      avatar: "https://via.placeholder.com/40",
      rating: 4.8,
      comment: "An outstanding course that covers everything I needed to know. The practical insights provided were incredibly valuable...",
    },
    // More testimonials...
  ];


    return (
        <>
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg">
                <Navbar />
                <div className='bg-[#30185D] text-black px-16 py-10 relative'>
                    <CourseInfo />
                    <div className="bg-white p-4 absolute rounded-lg w-[60vw] shadow-md flex text-center justify-between items-center">
                        <div className="flex  flex-col items-center text-center space-x-2 w-32">
                            <div className='flex items-center gap-2'>
                                <FaStar className="text-orange-400 text-xl" />
                                <p className="text-xl font-semibold">4.6</p>
                            </div>
                            <p className="text-gray-500 text-xs text-nowrap">17,383 Ratings</p>
                        </div>

                        <div className='border-l border-gray-300 w-1 h-16'></div>

                        <div className=" px-4 w-32">
                            <p className="text-xl font-semibold">150,832</p>
                            <p className="text-gray-500 text-xs text-nowrap">Already enrolled</p>
                        </div>

                        <div className='border-l border-gray-300 w-1 h-16'></div>

                        <div className=" px-4 w-32">
                            <p className="text-xl font-semibold">40x</p>
                            <p className="text-gray-500 text-xs text-nowrap">Return on investment</p>
                        </div>

                        <div className='border-l border-gray-300 w-1 h-16'></div>

                        <div className=" w-32">
                            <p className="text-xl font-semibold">70%</p>
                            <p className="text-gray-500 text-xs ">Students report career advancements</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row px-3'>
                    <div className='w-full  h-full px-9 flex flex-col items-center justify-center'>
                        <div className='flex mt-24 gap-9 bg-neutral-100 border px-6 py-3 text-black rounded'>
                            <p className='text-xs font-semibold'>What you’ll learn</p>
                            <p className='text-xs font-semibold'>Outcomes</p>
                            <p className='text-xs font-semibold'>Course Content</p>
                            <p className='text-xs font-semibold'>Prerequisite</p>
                            <p className='text-xs font-semibold'>Reviews</p>
                            <p className='text-xs font-semibold'>FAQs</p>
                        </div>
                        <div className='mt-6'>
                            <WhatYouLearn />
                        </div>
                        <div className='w-full px-7'>
                            <CourseIncludes />
                        </div>
                        <div className='w-full py-10'>
                        <CourseContent sections={courseData} />
                        </div>

                        <div className='w-full px-7 pb-16'>
                        <div className="text-xl font-semibold text-violet-800">Prerequisite</div>
                        <div className='text-black text-sm'>
                            <ul className="list-disc px-10">
                                <li>No previous knowledge required. </li>
                                <li> Suitable for all types of businesses (digital product, physical product, service, B2B, B2C).</li>
                                <li>Join with an open mind, hungry to learn amazing stuff!</li>
                            </ul>
                        </div>

                        </div>

                        <div className='w-full py-10'>
                        <SuccessStory ratings={ratings} surveyResults={surveyResults} testimonials={testimonials} />
                        </div>

                        <div className='w-full py-10'>
                            <FAQ/>
                        </div>

                    </div>
                    <div className='w-1/2 px-8 md:-mt-64 md:z-10'>
                        <div className='p-8'>
                            <PriceInfo/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

