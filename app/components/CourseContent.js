"use client";
import React, { useState } from 'react';

const CourseContent = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <div className="bg-white p-6 rounded-lg text-black">
      <div className="flex flex-col justify-between items-start mb-4">
        <div className="text-xl font-semibold text-violet-800">Course content</div>
        <div className="text-sm flex gap-2 justify-around text-gray-500 border p-2 mt-2 mb-2 rounded-full border-orange-500 bg-orange-100">
          <div className="mr-2 text-orange-500 font-semibold">{sections.length} sections</div>
          <div className='border border-orange-500'></div>
          <div className="mr-2 text-orange-500 font-semibold">{sections.reduce((acc, section) => acc + section.lectures.length, 0)} lectures</div>
          <div className='border border-orange-500'></div>
          <div className='text-orange-500 font-semibold'>{sections.reduce((acc, section) => acc + section.duration, 0)} hrs course length</div>
        </div>
      </div>

      <div className="border rounded">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#EEEBFC]  mb-4  cursor-pointer"
            onClick={() => toggleSection(index)}
          >
            <div className="p-2 flex justify-between items-center">
              <h3 className="font-medium">{section.title}</h3>
              <span>{section.lectures.length} lectures • {section.duration} min</span>
            </div>
            {activeSection === index && (
              <ul className="p-2 text-sm text-gray-600 bg-[#f0f1f3]">
                {section.lectures.map((lecture, i) => (
                  <li key={i} className="flex justify-between p-2">
                    <span>{lecture.title} {lecture.icon && <i className={lecture.icon}></i>}</span>
                    <span>{lecture.duration}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="text-center text-sm text-blue-500 cursor-pointer">
          {sections.length > 3 ? `${sections.length - 3} more sections` : null}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
