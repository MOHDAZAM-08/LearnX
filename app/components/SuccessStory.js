import React from "react";

const SuccessStory = ({ ratings, surveyResults, testimonials }) => {
  return (
    <div className="bg-white p-6 rounded-lg text-black ">
      {/* Ratings and Survey Section */}
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-start mb-8">
        {/* Ratings */}
        <div className="w-full sm:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Our Success Story</h2>
          <div className="flex items-center">
            <div className="mr-4 text-2xl">⭐ {ratings.score}</div>
            <div className="text-gray-600">{ratings.total} Ratings</div>
          </div>
          <p className="text-gray-600 mt-2">
            Gain inspiration and insights from our students&apos; recent reviews. Their success stories showcase the transformative journey of learning and growth they have experienced with PPC Pros Learning, highlighting the profound impact of our courses.
          </p>
        </div>

        {/* Survey Result */}
        <div className="w-full sm:w-1/3">
          <h3 className="text-sm font-semibold mb-2">Does this course meet people&apos;s expectations?</h3>
          <div className="text-sm">
            {surveyResults.map((result, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <span>{result.label}</span>
                  <span>{result.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${result.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐ {testimonial.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              {testimonial.comment}
            </p>
            <button className="text-purple-600 text-sm mt-2">Show more</button>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <div className="flex items-center space-x-2">
                <button className="flex items-center">
                  👍 <span className="ml-1">Helpful?</span>
                </button>
                <button>👎</button>
              </div>
              <button>...</button>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Reviews Button */}
      <div className="text-center">
        <button className="bg-purple-600 mt-4 border text-white rounded-xl px-4 py-2">Show all reviews</button>
      </div>
    </div>
  );
};

export default SuccessStory;
