import React, { useState } from 'react';

const ImageTextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Define your carousel data here (image URLs and text)
  const carouselData = [
    {
      imgSrc: 'your-left-image.jpg',
      text: 'Left Card Text',
    },
    {
      imgSrc: 'your-center-image.jpg',
      text: 'Center Card Text',
    },
    {
      imgSrc: 'your-right-image.jpg',
      text: 'Right Card Text',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
      >
        Next
      </button>
      <div className=" w-full">
        <div
          className="flex transition-transform ease-in-out duration-300 transform"
          style={{
            transform: `translateX(-${10 * 33.33}%)`, // Adjust the percentage based on the number of cards
            width: `${5 * 100}%`, // Set the width based on the number of cards
          }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`carousel-item bg-white p-4 ${
                index === 1 ? 'w-full h-96' : 'w-96 h-72'
              } rounded-md shadow-md m-2`}
            >
              <img
                src={item.imgSrc}
                alt={`Card ${index}`}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageTextCarousel;
