


import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);
export default function Sweeper() {
  const [swiper, setSwiper] = useState(null);

 
  return (
    <div className="mt-12 bg-[#11001E] sm:mt-[8.75rem]">
       <div className="mt-12 mb-20 sm:mt-[8.75rem]">
       <div className='flex justify-center'><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-20  mr-1 md:mr-6 sm:mr-16 h-0.5 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
           W H Y <span className='sm:mx-4 mx-2'>T R U S T</span> <span className='sm:mx-4 mx-2'>U S</span>
         </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-20  sm:ml-16 ml-1 h-0.5 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
       </div>

      <div className="track-wrapper block mx-auto bg-[#11001E]">
        <Swiper
          spaceBetween={32} // Adjust the space between slides
          slidesPerView={3} // Number of slides to show at once
          navigation={true} // Show navigation buttons (forward and backward)
          pagination={{ clickable: true }} 
          centeredSlides={true}
          loop={true}
          breakpoints={{
            // Display only one slide per view for screens narrower than 768px
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            // Customize the number of slides per view for larger screens
            1024: {
              slidesPerView: 3, // Show 3 slides on screens wider than 1024px
            },
          }}
        >
          <SwiperSlide>
            <div className="border-[#A965FF] mx-6 border-x-2 border-y-2 border-solid px-8 py-16 track__item">
              
  
      <p className='text-sm text-center text-[#F5F5F5]'>“Prodes made me understand how I can think from the design perspective into my daily tasks Prodes made me understand how I can think from the design perspective into my daily tasks “</p>
      <img src='/images/brand.png' className='block mx-auto w-24 my-6 h-24 rounded-full' alt='Brand Logo'/>

      <h1 className='font-semibold my-4 text-[#DFC5FF] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] mx-6 border-x-2 border-y-2 px-8 py-16 track__item">
              
  
      <p className='text-sm text-center text-[#F5F5F5]'>“Prodes made me understand how I can think from the design perspective into my daily tasks Prodes made me understand how I can think from the design perspective into my daily tasks “</p>
      <img src='/images/brand.png' className='block mx-auto w-24 my-6 h-24 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold my-4 text-[#DFC5FF] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] mx-6 border-x-2 border-y-2 px-8 py-16 track__item">
              
  
      <p className='text-sm text-center text-[#F5F5F5]'>“Prodes made me understand how I can think from the design perspective into my daily tasks Prodes made me understand how I can think from the design perspective into my daily tasks “</p>
       <img src='/images/brand.png' className='block mx-auto w-24 my-6 h-24 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold my-4 text-[#DFC5FF] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF]   border-x-2 border-y-2 px-8 py-16 track__item">
              
  
      <p className='text-sm  text-center text-[#F5F5F5]'>“Prodes made me understand how I can think from the design perspective into my daily tasks Prodes made me understand how I can think from the design perspective into my daily tasks “</p>
       <img src='/images/brand.png' className='block mx-auto w-24 my-6 h-24 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold my-4 text-[#DFC5FF] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] mx-6 border-x-2 border-y-2 px-8 py-16 track__item">
              
  
      <p className='text-sm text-center text-[#F5F5F5]'>“Prodes made me understand how I can think from the design perspective into my daily tasks Prodes made me understand how I can think from the design perspective into my daily tasks “</p>
       <img src='/images/brand.png' className='block mx-auto w-24 my-6 h-24 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold my-4 text-[#DFC5FF] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
    
        </Swiper>
     
      </div>
    </div>
  );
}
