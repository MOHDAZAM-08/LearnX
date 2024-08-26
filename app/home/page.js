'use client';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import { IoSearchOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function page() {

  const categories = [
    {
      id: 1,
      title: "Email marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "SEO marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "Adverties marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Adverties marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 4,
      title: "Adverties marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 4,
      title: "Adverties marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 4,
      title: "Adverties marketing",
      courses: "5 Courses",
      duration: "35 min",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];


  const TestimonialCard = ({ content, name, title }) => (
    <div className='border rounded-lg p-5 bg-white'>
      <div className='p-4 text-gray-800'>{content}</div>
      <div className='flex items-center gap-2 px-4 pb-4'>
        <div className='bg-orange-500 text-white rounded-full text-lg p-2'><FaRegUser /></div>
        <div>
          <div className='text-sm font-semibold'>{name}</div>
          <div className='text-xs'>{title}</div>
        </div>
      </div>
    </div>
  );


  const testimonials = [
    {
      content: 'LearnX transformed my marketing skills! The courses are practical, engaging, and have given me the confidence to tackle real-world challenges. I couldn’t be more grateful!',
      name: 'Koushik Paul',
      title: 'Digital Marketer'
    },
    {
      content: 'My journey with LearnX has been nothing short of transformative. Coming from a non-marketing background, I was apprehensive about diving into a field that seemed so vast and complex. But from the moment I started my first course, I knew I was in the right place...',
      name: 'Koushik Paul',
      title: 'Digital Marketer'
    },
    {
      content: 'From novice to expert in just months! LearnX structured learning path and real-world examples helped me build a solid foundation in marketing. Highly recommended!',
      name: 'Koushik Paul',
      title: 'Digital Marketer'
    },
    {
      content: 'LearnX exceeded my expectations in every way. The courses are incredibly well-structured, making even complex marketing concepts easy to understand...',
      name: 'Koushik Paul',
      title: 'Digital Marketer'
    },
    {
      content: 'LearnX courses are unmatched! The content is top-notch, and the community support is incredible. I’ve built connections and skills that will last a lifetime.',
      name: 'Koushik Paul',
      title: 'Digital Marketer'
    },
    {
      content: 'LearnX redefined my learning experience. The interactive lessons and insightful feedback made me feel more prepared and confident in my marketing career.',
      name: 'Koushik Paul',
      title: 'Digital Marketer'
    },
  ];



  // fAQ
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What will I learn in this marketing course?',
      answer: 'In this course, you will learn key marketing concepts, strategies for digital marketing, social media marketing, SEO, content creation, email marketing, and analytics. We will also cover practical skills for using tools like WordPress, ChatGPT, and various social media platforms.'
    },
    {
      question: 'Do I need any prior knowledge or experience in marketing to take this course?',
      answer: 'No prior knowledge or experience is required. This course is designed for beginners as well as professionals looking to refresh their skills.'
    },
    {
      question: 'Are there any opportunities for hands-on practice and real-world applications?',
      answer: 'Yes, the course includes hands-on projects and real-world examples to ensure that you can apply what you learn directly to your work or business.'
    },
    {
      question: 'What kind of support is available if I have questions or need help?',
      answer: 'You can contact us at support@ppcproslearning.in for any questions or help. Additionally, there is a community forum where you can ask questions and receive support from instructors and peers.'
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active question
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };


  return (
    <>
      <div className="w-full h-full bg-gradient-to-br from-[#e9defa] to-[#fbfcdb]">
        <Navbar />

        <div className='flex flex-col md:flex-row xl:flex-row justify-between items-center w-full px-5 md:px-10 lg:px-12 py-8 md:py-12 lg:py-10 h-full'>

          {/* <!-- Left Section --> */}
          <div className='text-neutral-800 font-medium text-3xl md:text-4xl lg:text-5xl w-full md:w-1/2 flex flex-col justify-center leading-snug h-full lg:pl-6'>
            <div>
              Master the Art of <span className='italic text-violet-600'>Marketing</span>: Elevate Your Skills, Dominate the
              <span> Digital World like a</span>
              <span className='flex gap-3'>
                <Image src="/imgLanding.png" alt="Description of image" height={80} width={190} /> Like a Pro!
              </span>
            </div>
            <div className='pt-6 md:pt-8 lg:pt-10'>
              <div className='bg-violet-700 text-white text-base md:text-lg w-40 md:w-48 lg:w-56 p-2 md:p-3 text-center rounded-lg hover:bg-violet-600 cursor-pointer'>
                Start Learning
              </div>
            </div>
          </div>

          {/* <!-- Right Section --> */}
          <div className='h-full flex  w-full md:w-1/2 justify-center items-end  p-1 pt-10 md:p-12 lg:p-16'>

            <div className='relative top-0 left-0 lg:-top-10 lg:left-2 h-full lg:-z-1 w-96 '>
              <Image src="/image67.jpg" alt="Description of image 2" width={500} height={500} />

              <div className='bg-orange-500 absolute bottom-0  left-0  p-3  rounded-lg flex items-center justify-center text-sm flex-col md:flex-col md:text-sm  lg:text-2xl lg:-bottom-24'>
                <div className='text-nowrap'>Happy Students</div>
                <div className='font-bold'>20000+</div>
              </div>

            </div>

            <div className='relative top-0 left-0 h-full w-96'>

              <Image src="/image68.jpg" alt="Description of image 1" width={600} height={600} />

              <div className=' absolute  gap-2  -top-9  right-1 w-32 flex border border-neutral-200 bg-white px-2 py-1 rounded-xl md:w-36 md:-right-5 lg:right-2 lg:w-48 lg:scale-110'>
                <Image src="/star.jpg" alt="Star icon" width={20} height={10} />
                <Image src="/star.jpg" alt="Star icon" width={20} height={10} />
                <Image src="/star.jpg" alt="Star icon" width={20} height={10} />
                <Image src="/star.jpg" alt="Star icon" width={20} height={10} />
                <Image src="/star.jpg" alt="Star icon" width={20} height={10} />
                <div className='text-sm md:text-sm text-black font-semibold'>4.6</div>
              </div>
            </div>
          </div>
        </div>



        <div className='text-black flex-col gap-8 sm:gap-4  sm:flex sm:flex-row md:flex-row lg:flex-row lg:gap-4 items-center justify-around w-full py-7 lg:py-10 px-5 lg:px-12'>
          <div className='flex flex-col gap-2 pb-10'>
            <div className=' '><BsFillLightningChargeFill className='p-2 border border-orange-500 rounded-full text-8xl' color='orange' /></div>
            <div className='w-full md:w-[300px] lg:w-[400px]  text-3xl md:text-4xl lg:text-5xl'>Explore the trending categories</div>
          </div>

          {/* Container for scrollable content */}
          <div className="flex overflow-x-scroll snap-x gap-2 lg:gap-5 snap-mandatory w-full md:w-[400px] lg:w-[900px] custom-scrollbar-hide">
            {categories.map((category) => (
              <div
                key={category.id}
                className="w- md:w-[20rem] lg:w-[20rem]  h-60 border-2 flex-shrink-0 flex flex-col rounded-xl justify-between items-center snap-start"
              >
                <video
                  className="w-full h-40 object-cover rounded-t-xl"

                  src={category.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="flex flex-col gap-2 p-3">
                  <div className="text-lg font-semibold">{category.title}</div>
                  <div className="flex gap-3 text-sm">
                    <div className='flex items-center gap-2 '><FaPlayCircle className='text-lg text-neutral-600' /> {category.courses}</div>
                    <div className='flex items-center gap' ><GoDotFill className='text-lg text-neutral-600' />{category.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      <div className='bg-cyan-100 h-full text-black flex flex-col justify-center p-3'>

        <div className='flex p-2 justify-center  flex-col sm:flex-row'>
          <div className='text-4xl sm:text-5xl lg:text-5xl  w-full lg:w-1/2  p-2 sm:p-7 lg:p-10'>Transformative Courses to Learn, Grow, Succeed</div>
          <div className='w-full  lg:w-1/2 flex  flex-col justify-center text-sm sm:text-xl p-5 lg:p-10 '>
            <div className='flex  items-center gap-2'><FaChevronCircleRight className='text-neutral-500' /> Thousands of creative classes. Beginner to pro.</div>
            <div className='flex items-center gap-2'><FaChevronCircleRight className='text-neutral-500' /> Thousands of creative classes. Beginner to pro.</div>
            <div className='flex items-center gap-2'><FaChevronCircleRight className='text-neutral-500' /> Thousands of creative classes. Beginner to pro.</div>
            <div className='flex items-center gap-2'><FaChevronCircleRight className='text-neutral-500' /> Thousands of creative classes. Beginner to pro.</div>
          </div>
        </div>

        <div className='flex flex-col  md:flex-row sm:items-center sm:justify-center w-full gap-2'>

          <div className='bg-blue-700 text-white p-4 h-96 lg:h-[350px] w-full md:w-1/2 lg:w-80 flex flex-col justify-around'>
            <div className='w-full flex flex-col items-start'>
              <div className='text-xl '>Hours Content</div>
              <div className='text-2xl font-semibold '>20,000+</div>
            </div>
            <div className='border'></div>

            <div className='w-full flex flex-col items-start'>
              <div className='text-xl '>Learning Programs</div>
              <div className='text-2xl font-semibold '>244+</div>
            </div>

            <div className='border '></div>
            <div className='w-full flex flex-col items-start'>
              <div className='text-xl '>Satisfied Students</div>
              <div className='text-2xl font-semibold '>1000+</div>
            </div>
          </div>

          <div className='h-full w-full sm:w-1/2 md:w-1/2'>
            <Image src="/motivation.jpg" alt="Description of image"
              width={500}
              height={500}
              className='h-full sm:h-[350px] sm:w-[650px] w-full '
            />
          </div>
        </div>

      </div>

      <div className='bg-white text-black flex items-center  flex-col'>
        <div className='p-10 text-5xl'>Browse Courses</div>

        <div className="relative w-[300px] sm:max-w-[3000px] mt-4">
          <input
            type="search"
            placeholder="What do you want to learn"
            className="bg-transparent border rounded-full pl-10 pr-4 py-2 text-xs md:text-sm text-neutral-700 w-full border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute top-2 left-2.5 md:top-2.5 md:left-3 text-neutral-500 cursor-pointer"
          >
            <IoSearchOutline size={18} />
          </div>
        </div>

        <div className='flex py-10 flex-wrap w-[80vw] gap-3 items-center justify-center'>
          <div className='text-sm border px-3 py-2 rounded-full bg-violet-500 text-white'>Featured</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>SEO</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>PPC & Paid Search</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Digital Marketing</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Email Marketing</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Marketing</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Email Marketing</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Email Marketing</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Digital Strategy</div>
          <div className='text-sm border px-3 py-2 rounded-full hover:bg-violet-500 hover:text-white'>Content Marketing</div>
        </div>
        <div>
          <div className="flex pt-10 flex-wrap gap-2 lg:gap-5  w-full md:w-[400px] lg:w-[80vw] items-center justify-center">
            {categories.map((category) => (
              <div
                key={category.id}
                className="w- md:w-[20rem] lg:w-[20rem]  h-60 border-2 flex-shrink-0 flex flex-col rounded-xl justify-between items-center snap-start"
              >
                <video
                  className="w-full h-40 object-cover rounded-t-xl"

                  src={category.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="flex flex-col gap-2 p-3">
                  <div className="text-lg font-semibold">{category.title}</div>
                  <div className="flex gap-3 text-sm">
                    <div className='flex items-center gap-2 '><FaPlayCircle className='text-lg text-neutral-600' /> {category.courses}</div>
                    <div className='flex items-center gap' ><GoDotFill className='text-lg text-neutral-600' />{category.duration}</div>
                    <div className='font-semibold text-violet-700'>$200</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className='bg-white text-black py-20 flex flex-col items-center justify-center'>
        <div className='text-5xl  w-1/2 text-center py-3'>Why LearnX is Every Student's Favorite</div>

        <div className='flex flex-col  md:flex-row w-[80vw] pt-20 justify-center items-center'>

          <div className='hover:rotate-6 ease-in duration-300 border rounded cursor-pointer h-80 w-96 px-3 flex items-center justify-center flex-col bg-[#D0DDFC] text-center  text-black'>
            <div className='text-xl font-medium '>Expert Instructors</div>
            <div className='text-xs'>Our instructors are passionate about sharing their knowledge and are dedicated to your success.</div>
          </div>

          <div className='hover:rotate-6 ease-in duration-300 border rounded cursor-pointer h-80 w-96 px-3 flex items-center justify-center flex-col bg-[#F6D3C1] text-center  text-black'>
            <div className='text-xl font-medium '>Expert Instructors</div>
            <div className='text-xs'>Our instructors are passionate about sharing their knowledge and are dedicated to your success.</div>
          </div>

          <div className=' hover:rotate-6 ease-in duration-300 border rounded cursor-pointer h-80 w-96 px-3 flex items-center justify-center flex-col bg-[#D0DDFC] text-center  text-black'>
            <div className='text-xl font-medium '>Expert Instructors</div>
            <div className='text-xs'>Our instructors are passionate about sharing their knowledge and are dedicated to your success.</div>
          </div>

          <div className='hover:rotate-6 ease-in duration-300 border rounded cursor-pointer h-80 w-96 px-3 flex items-center justify-center flex-col bg-[#F6D3C1] text-center  text-black'>
            <div className='text-xl font-medium '>Expert Instructors</div>
            <div className='text-xs'>Our instructors are passionate about sharing their knowledge and are dedicated to your success.</div>
          </div>

        </div>
      </div>

      <div className="bg-gradient-to-t from-[#fce1a9] to-[#d1fdff] flex flex-col items-center justify-center">
        <div className='p-8 md:p-10 text-3xl md:text-5xl w-[60vw] text-black text-center'>Stories of Transformation: Hear How We <span className='text-[#5a5aff] font-semibold italic'>Empowered</span> Their Journey</div>

        <div className='text-black flex flex-wrap gap-5 w-[80vw] py-12'>
          <div className='w-[80vw] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  content={testimonial.content}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              ))}
            </div>
          </div>
        </div>


      </div>


{/* FQA */}
      <div className='bg-gradient-to-t p-4 from-[#fce1a9] to-[#d1fdff] flex flex-col items-center justify-cente text-black'>
        <div className="max-w-2xl mx-auto my-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center mb-8">
            Have a question that is not answered? You can contact us at{' '}
            <a href="mailto:support@ppcproslearning.in" className="text-blue-600">
              support@ppcproslearning.in
            </a>
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? '✕' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="text-gray-600 mb-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FADFCA] py-20 px-6 flex flex-col items-center text-center relative text-black">
      <div className="absolute -top-20 left-10 mt-10 ml-10">
        <div className="bg-green-500 text-white border-2 rounded-full w-24 h-24 p-10 flex items-center justify-center">
          <span className="text-sm font-bold  ">10K+<br/>Students</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Unlock Your Potential with LearnX</h1>
      <p className="text-gray-700 max-w-md mx-auto mb-6">
        Explore boundless opportunities for personal and professional growth with Edulink's diverse courses, tailored to help you reach your goals and passions, today!
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Sign up/Sign in
        </button>
        <button className="flex items-center text-dark-gray hover:underline">
          Explore
          <span className="ml-2">➔</span>
        </button>
      </div>
    </div>

<Footer/>

    </>
  )
}
