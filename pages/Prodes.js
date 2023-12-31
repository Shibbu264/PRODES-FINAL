import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { getAuth ,onAuthStateChanged} from 'firebase/auth';
import Letsdesign from '../components/letsdesign';
import ProdesCard from '../components/prodescard';
import Leftline from '../components/leftline1';
import Rightline from '../components/rightline';


export default function Prodes() {




  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-[#11001E] my-0">
     <NavBar navbar={true} />

     --Hero
     <div className="bg-[#11001E] relative mt-36 z-20 w-[100%] ">
      <div className="sm:text-5xl text-3xl text-center block mx-auto text-white">
        <h1 className="relative font-medium" >
        Diving into the world of, for
        </h1>
        <h1 className="my-2 font-medium" >
         and by the <span className="text-[#A965FF]"> Designers</span>
        </h1>
      </div>
      <div class="flex sm:mt-36 mt-24 sm:mb-28 mb-16 h-64 flex-col justify-center  items-center">
  
   
    <div class="bg-[#D2AFFF] absolute w-[1575px] h-[31px]   sm:inline hidden z-20  rounded-lg text-[#11001E] transform rotate-[5.173deg] flex-shrink-0 text-[25.841px] leading-[32.301px] tracking-[1.496px] custom-text font-semi-bold text-center ">
    PRODES 2.0 * OCTOBER 2023 * FREE COHORT-BASED COMMUNITY FREE COHORT-BASED COMMUNITY * PRODES 2.0 
    </div>
   <img src='/images/Group 33592.png' className='z-30  sm:block hidden absolute w-[543px] h-[408px] left-0 right-0 mx-auto'/>
 
  <div class="bg-[#5C2F93]   w-[1575px] h-12 sm:flex items-center hidden rounded-lg sm:mt-0 mt-28  flex-shrink-0 text-[#FFFFFF] transform custom-text rotate-[-5.55deg] text-[24.93px] leading-[31.162px] tracking-[1.496px]  text-center ">
    LEARN  DESIGN  CONCEPTS  VIA  PRACTICAL  APPLICATIONS  -  LEARN  VIA  PRACTICAL  APPLICATIONS  -  LEARN  DESIGN CONCEPTS
  </div>

  

--for Phone
  <div class="bg-[#D2AFFF] p-2 mx-3 sm:hidden my-16   rounded-lg text-[#11001E] z-10  text-xl font-semibold text-center ">
      PRODES 2.0 * OCTOBER 2023 * FREE COHORT-BASED COMMUNITY  * PRODES 2.0
    </div>
   <img src='/images/Group 33592.png' className='z-30 block sm:hidden absolute mt-12 left-0 right-0 mx-auto'/>
 
  <div class="bg-[#5C2F93] p-4 mx-3 sm:hidden rounded-lg sm:mt-0 mt-40 z-10 text-white  text-[24.93px] font-semibold text-center ">
    LEARN  DESIGN  CONCEPTS  VIA  PRACTICAL  APPLICATIONS  -  LEARN  VIA  PRACTICAL  APPLICATIONS  -  LEARN  DESIGN CONCEPTS
  </div>
</div>

    
    </div>
    <img  src='/images/triangle.png'className= 'mt-36 w-[15px] h-[15px]   text-white block mx-auto  ' ></img>
    <div className="mt-12 sm:mt-[8.75rem]">
     <div className='flex justify-center items-center gap-12 '><Leftline/>  <h1 className="font-bold font-heading w-[291.842px]  text-center text-[#F5F5F5] text-[28px] sm:text-[28px] leading-[35.7px] tracking-[10px] ">
         PRODES
        </h1><Rightline/></div></div>
        <img src="/images/Union.svg" alt="Image 2" class="w-8 absolute h-8 left-72 mt-24 ml-auto mr-48"/>
        <div class="flex   justify-center mb-14 sm:mt-24 mt-12">
    <div class="sm:flex text-neutral-100  sm:flex-row flex-col sm:gap-0 gap-10  justify-center">
    <img src="/images/Union.svg" alt="Image 2" class="w-8 absolute h-8 right-72  ml-auto mr-20"/>
        <div class="flex flex-col items-center sm:my-0 my-32  sm:mt-40 mx-12">
            <img src="/images/image 109.svg" alt="Image 1" class="w-[148px] h-[148px] mb-2"/>
           
            <p class="p-2 w-[193px] font-medium text-center tracking-[0.548px] leading-[25px] text-[14px] h-32  rounded text-[#F5F5F5] mt-2">Weekly Live & Interactive sessions </p>
        </div>
        
        <div class="flex flex-col items-center sm:my-0 my-32  sm:mt-20 mx-12">
       
            <img src="/images/image 164.svg" alt="Image 2" class="w-[145px] h-[145px] mb-2"/>
           
            <p class="p-2 w-[193px] font-medium text-center tracking-[0.548px] leading-[25px] text-[14px] h-32  rounded text-[#F5F5F5] mt-2">Building your portfolio from scratch</p>
        </div>
        
        <div class="flex flex-col items-center sm:mt-8 my-32   mx-12">
            <img src="/images/image 105.svg" alt="Image 3" class="w-[129px] h-[129px] mb-2"/>
           
            <p class="p-2 w-[193px] font-medium text-center tracking-[0.548px] leading-[25px] text-[14px] h-32 rounded text-[#F5F5F5] mt-2 ">Meeting & learning with like-minded friends </p>
        </div>
        
        <div class="flex flex-col items-center my-32 sm:my-0 sm:mt-24 sm:mb-3 mx-12">
            <img src="/images/image 163.svg" alt="Image 4" class="w-[129px] h-[129px] mb-2"/>
           
            <p class="p-2 w-[193px] font-medium text-center tracking-[0.548px] leading-[25px] text-[14px] h-32  rounded text-[#F5F5F5] mt-2">Explore multiple real design stories</p>
        </div>
        
        <div class="flex flex-col items-center  my-32 sm:mt-40 mb-0 mx-12">
            <img src="/images/image 116.svg" alt="Image 5" class="w-[152px] h-[152px] mb-2"/>
           
            <p class="p-2 w-[193px] font-medium text-center tracking-[0.548px] leading-[25px] text-[14px] h-32 rounded text-[#F5F5F5] mt-2">Lifetime benefits to every <span className='text-[#A965FF]'>Prodes </span> member</p>
        </div>
    </div>
</div>

<div className="sm:text-5xl text-3xl text-center block mx-auto text-white">
<img src="/images/Union.svg" alt="Image 2" class="w-8 absolute h-8 left-96 mt-16 ml-auto mr-48"/>
        <h1 className="relative  w-[613px]text-center text-neutral-100 text-[33.57px] font-semibold font-['Montserrat'] leading-[49.17px] tracking-wide" >
       Begin your journey to the
        </h1>
        <h1 className="my-4 text-center text-[33.57px] font-semibold text-[#A965FF]" >
         Future of Design
        </h1>

        
      </div>
      <h1 className='w-[381.26px] h-[48.13px] flex items-center pt-3  my-20 text-xl text-center  text-[#F5F5F5] border-[#F5F5F5] sm:block mx-auto  sm:px-6 px-3 rounded-3xl border-x-2 border-y-2'> J O I N<span className='mx-3'>P R O D E S</span><span className='mx-3'> 2 . O </span></h1>
      <img src="/images/Union.svg" alt="Image 2" class="w-8 absolute h-8 mb-16 right-48  ml-auto mr-48"/>
<div className='my-24 mt-40 titu h-fit sm:flex sm:bg-no-repeat py-6 sm:py-0  block mx-auto justify-between'>
<h1 className='sm:text-5xl block my-auto mx-auto font-semibold w-[50%] text-2xl text-[#F5F5F5]'>What makes us creative and different in what we do?</h1>
<img src='/images/image 114.png' className='block m-auto'/>
<img src="/images/Union.svg" alt="Image 2" class="w-8 absolute h-8 left-60 mt-[275px]  ml-auto mr-36"/>
</div>

<img src='/images/Vector 22.png' className='block sm:hidden mx-auto w-4 h-36'/>

<div class="flex flex-col   justify-center items-center mb-24 sm:mt-24 mt-12">

    <div class="sm:flex w-[90%] sm:flex-row flex-col items-center sm:gap-24 gap-10 justify-center">
   
       
        
        <div class="flex flex-col items-center sm:my-0 my-32   ">
       
            <img src="/images/image 162.svg" alt="Image 2" class="w-[256px] h-[186px] mb-8"/>
           
            <p class="  text-center h-32 font-medium  rounded text-[#F5F5F5] sm:text-[24px] w-[301px]  text-2xl leading-[37.881px] tracking-[0.36px]   mt-2">Simply fill out the form <span className='text-[#A965FF]'>FREE</span> for Prodes 2.0</p>
        </div>
        
        <div class="flex flex-col items-center sm:my-0 my-32  mb-2 ">
            <img src="/images/image 111.svg" alt="Image 3" class="w-[256px] h-[186px] mb-8"/>
           
            <p class="  text-center h-32 font-medium rounded text-[#F5F5F5] sm:text-[24px] w-[364px]  text-2xl tracking-[0.36px]  mt-2 ">Get shortlisted & exclusive access to surprises </p>
        </div>
        
        <div class="flex flex-col items-center my-32 sm:my-0  ">
            <img src="/images/Group 33603.svg" alt="Image 4" class="w-[256px] h-[186px] mb-8"/>
           
            <p class="  text-center h-32 font-medium  rounded text-[#F5F5F5] sm:text-[24px] w-[346px]  text-2xl tracking-[0.36px]  mt-2">Learn, enjoy & experiment your learnings</p>
        </div>
        
        
    </div>
</div>



<div className='flex justify-center items-center'><Leftline/>  <h1 className="font-semibold font-heading w-[464.782px] flex-shrink-0  text-center text-[#F5F5F5] text-lg sm:text-[28px] leading-[35.7px] tracking-[10px] ">
PRO-DES<span className='text-[#A965FF]'>IGNER</span>
        </h1><Rightline/></div>
<div className='sm:flex w-[90%] mt-32 mb-24 block mx-auto justify-center sm:gap-[2%]'>
<div className='circle absolute mt-0 mr-48 '></div>
<div className='mt-16 mb-32'>
<ProdesCard image="/images/image 130.png" data="For anyone exploring the awesome domain of Product and UI/UX Design" />
</div><div className='circle absolute mt-16 mr-[940px]'></div>
<ProdesCard image="/images/image 153.png"  data="For curious designers to upgrade themselves up to a next level" />
<div className='mt-16'> <div className='circle absolute mt-0 ml-32'></div>
<ProdesCard image="/images/image 129.png" data="For those transitioning
into the world of design from something boring" />
</div></div>




<Letsdesign/>
      <Footer />
    </div>
  );
}



