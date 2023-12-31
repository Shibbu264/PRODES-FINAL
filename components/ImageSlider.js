


import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Leftline from './leftline1';
import Rightline from './rightline';

SwiperCore.use([Navigation, Pagination]);
export default function Sweeper() {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    console.log('Going to previous slide');
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="mt-12 bg-[#11001E] sm:mt-[8.75rem]">
       <div className="mt-12 mb-20 sm:mt-[8.75rem]">
       <div className='flex justify-center items-center'><Leftline/>  <h1 className="  w-[464.586px] flex-shrink-0 text-gray-200 text-center font-montserrat font-semibold text-[28px] leading-[35.7px] tracking-[10px] ">
           WHY <span className='sm:mx-1 mx-2'>TRUST</span> <span className='sm:mx-1 mx-2'>US?
           </span>
         </h1><Rightline/></div>
       </div>

      <div className="track-wrapper block mx-auto bg-[#11001E]">
        <Swiper ref={swiperRef}
          spaceBetween={32} // Adjust the space between slides
          slidesPerView={3} // Number of slides to show at once
           // Show navigation buttons (forward and backward)
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
            <div className="border-[#A965FF] mx-6 border-x-2 border-y-2 border-solid px-8 w-[575.92px] h-[431.10px] py-16 track__item">
              
  
      <p className='sm:text-[15.742px] text-base font-normal w-[463px] px-6 sm:text-white text-gray-200  font-montserrat  leading-[31.71px] tracking-[0.251px] '>“Prodes made me understand how I can think from the design perspective into my daily tasks Prodes made me understand how I can think from the design perspective into my daily tasks “</p>
      <img src='/images/abhishek.jpg' className='block mx-auto w-28 my-6 h-28 rounded-full' alt='Brand Logo'/>

      <h1 className='font-semibold mt-4 mb-2 text-[#DFC5FF] text-[16.742px] sm:leading-[31.71px] tracking-[0.251px] sm:tracking-[0.251px] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white text-[13.393px]'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] my-auto block mx-6 border-x-2 border-y-2 px-8 py-16 track__item">
              
  
     
      <img src='/images/abhishek.jpg' className='block mx-auto w-28 h-28 mb-16 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold mt-4 mb-2 text-[#DFC5FF] text-[24.742px] sm:leading-[31.71px] tracking-[0.251px] sm:tracking-[0.251px] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white text-[18.393px]'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] my-auto block mx-6 border-x-2 border-y-2 px-8 py-16 track__item">
              
  
     
       <img src='/images/abhishek.jpg' className='block mx-auto w-28 h-28 mb-16 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold mt-4 mb-2 text-[#DFC5FF] text-[24.742px] sm:leading-[31.71px] tracking-[0.251px] sm:tracking-[0.251px] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white text-[18.393]'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] my-auto block   border-x-2 border-y-2 px-8 py-16 track__item">
              
  
    
       <img src='/images/abhishek.jpg' className='block mx-auto w-28 h-28 mb-16 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold mt-4 mb-2 text-[#DFC5FF] text-[24.742px] sm:leading-[31.71px] tracking-[0.251px] sm:tracking-[0.251px] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white text-[18.393]'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[#DFC5FF] my-auto block mx-6 border-x-2 border-y-2 px-8 py-16 track__item">
              
  
   
       <img src='/images/abhishek.jpg' className='block mx-auto w-28 h-28 mb-16 rounded-full' alt='Brand Logo'/>
      <h1 className='font-semibold mt-4 mb-2 text-[#DFC5FF] text-[24.742px] sm:leading-[31.71px] tracking-[0.251px] sm:tracking-[0.251px] text-center'>K Abhishek kumar</h1>
      <h2 className='text-white text-[18.393]'>Founder, Blackshorts</h2>
            </div>
          </SwiperSlide>
        
        </Swiper>
     

      </div>
      <div className='flex gap-16 my-12  justify-center items-center'>
      <img src='/images/arrow-right 1.svg' onClick={goPrev} className=' cursor-pointer w-16 rotate-[180deg] hover:scale-[1.1]   h-16   rounded-full font-bold   '/> 
      <img src='/images/arrow-right 1.svg' onClick={goNext} className=' cursor-pointer w-16 h-16 hover:scale-[1.1]    rounded-full font-bold   '/> 
     </div>
    </div>
  );
}
