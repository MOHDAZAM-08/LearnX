"use client";
import React, { useState } from 'react'

export default function FAQ() {

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
        </>
    )
}
