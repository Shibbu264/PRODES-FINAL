import Image from 'next/image';
import CountdownElement from './Countdown';
import data from '../data/data.json';
import Card from '../components/Card';
import Link from 'next/link';
import ProdesCard from './prodescard';
import Slider from './ImageSlider';
import ImageTextCarousel from './ImageSlider';
import Whytrustus from './letsdesign';
import Letsdesign from './letsdesign';



export default function Main() {
  return (
    <div className="w-screen z-20 relative  mx-auto  bg-[#11001E]  flex flex-col space-y-24">
    
      <div className="mt-12 sm:mt-[8.75rem]">
     <div className='flex justify-center '><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-28 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          O U R <span className='sm:mx-4 mx-2'> M I S S I O N</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-28 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
       

<h1 className=' mt-24 mb-36 text-[#F5F5F5] text-center  sm:font-semibold sm:text-5xl md:3xl text-4xl'>Building an Interactive<span className='text-[#A965FF]'> Design</span> Ecosystem</h1>

<Card/>
<div className='w-[90%] justify-center sm:flex block mx-auto '>
  <div>
<img className='sm:flex hidden' src='/images/HowWeWorkIllustration.png'/></div>
<div>
<img className='flex w-80 mt-24 h-16'  src='/images/Group 7089.png'/>
<h1 className='text-3xl mt-14 font-bold text-[#F5F5F5]'>The exclusive marketplace</h1>
<h1 className='text-3xl font-bold text-[#F5F5F5]'>for everything Design</h1>
<p className='text-xl text-[#DFC5FF] mt-6'>A common platform connecting amazing brands with the best & most trusted designers</p>
<button 
            className={`px-12  2xl:px-12  mt-8 sm:inline block sm:mr-auto mx-auto rounded-md text-[2.125rem] text-[#F5F5F5]  font-semibold  sm:py-1  bg-[#8049C3] hover:text-[black]  `}
          >
            Explore
          </button>
</div>

</div>

       
      </div>

      <div className="mt-12 sm:mt-[8.75rem]">
      <div className='flex justify-center'><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-28 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          A <span className='sm:mx-4 mx-2'>B A S I C</span> <span className='sm:mx-4 mx-2'>I D E A</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-28 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
      </div>
      

      <div className='flex justify-center w-[90%]  mt-28 mx-auto'>
        <div className='block w-64 mx-auto '>
        <img className='inline mx-auto md:w-auto lg:w-auto' src='/images/gif3.gif'/><h1 className='text-[#F5F5F5] text-xl sm:w-48 w-[95%] font-semibold block mx-auto'>Anyone motivated to dive into the world of learning and exploring design</h1></div>
  <img className='block mx-auto my-auto sm:w-32 h-2 ' src='/images/Vector 20.png'/>
 <div className='block mx-auto'>
  <img className=' mx-auto block  w-28 h-28' src='/images/Group 50.png'/><div className='sm:inline block'>
<img className='block mx-auto w-4 h-24 sm:w-auto my-8 md:w-auto lg:w-auto' src='/images/Vector 22.png'/>
<img className='block mx-auto mt-12 mb-8 w-full sm:w-auto md:w-auto lg:w-auto' src='/images/Frame 33605.png'/>
<h1 className='text-[#F5F5F5] text-xl sm:w-48 w-[95%] font-semibold block mx-auto'>Product & UI/UX Design learning and competing community space </h1>

</div></div>
  <img className='block my-auto  sm:w-32 h-2 mx-auto' src='/images/Vector 20.png'/>
  <div className='block mx-auto'><img className='block w-48 h-48 my-auto mx-auto ' src='/images/gif2.gif'/><div className='sm:inline block mx-auto '>
<img className='block mx-auto w-4 h-24 sm:w-auto md:w-auto lg:w-auto' src='/images/Vector 22.png'/>
<img className='block mx-auto mt-12 mb-8 w-full sm:w-auto md:w-auto lg:w-auto' src='/images/Frame 33606.png'/>
<h1 className='text-[#F5F5F5] text-xl w-48 font-semibold block mx-auto'>Enter into a world of immense industry-level Job & Internship Opportunities </h1>
</div></div></div>


{/* <div className='flex  justify-center gap-[10%]   w-[90%]'>
  <div></div>


</div> */}
<img  src='/images/triangle.png'className= 'mt-28   text-white block mx-auto' ></img>

<div className='flex justify-center'><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-24 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          W H Y<span className='sm:mx-4 mx-2'>B R A N D E S</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-24 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
<div className='sm:flex w-[90%] block mx-auto justify-center sm:gap-[10%]'>
<div className='mt-16'>
<ProdesCard image="/images/Saly-41.png" data="Brandes empowers you to 
bring life into your work/ideas 
magnificiently" />
</div>
<ProdesCard image="/images/Saly-39.png"  data="An entire FREE community 
of self-learned and 
experienced designers" />
<div className='mt-16'>
<ProdesCard image="/images/Saly-40.png" data="Regular sessions & 
challenges: From scratch 
to national level" />
</div></div>



<div>
<img  src='/images/Group 7018.png' className= ' w-10 h-10 mb-2  text-white block mx-auto' ></img>
<h1 className='text-[#DFC5FF] text-center text-xl'>and much more </h1>
</div>
<div className="mt-12 sm:mt-[8.75rem]">
        <div className='flex justify-center'><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-28 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          W H Y <span className='sm:mx-4 mx-2'>T R U S T</span> <span className='sm:mx-4 mx-2'>U S ?</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-28 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
      </div>
<Letsdesign/>





     
      </div>
   
  );
}
