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
import Sweeper from './ImageSlider';
import Basicidea from './basicidea';



export default function Main() {
  return (
    <div className="w-screen z-20 relative  mx-auto  bg-[#11001E]  flex flex-col space-y-24">
    
      <div className="mt-12 sm:mt-[8.75rem]">
     <div className='flex justify-center '><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-24 mr-1 md:mr-6 sm:mr-16 h-0.5 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          O U R <span className='sm:mx-4 mx-2'> M I S S I O N</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-24 sm:ml-16 ml-1 h-0.5 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
       

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
            className={`px-12  2xl:px-12  mt-8 sm:inline block sm:mr-auto mx-auto rounded-md text-[2.125rem] text-[#F5F5F5]  font-semibold  sm:py-1  bg-[#8049C3] hover:rounded-2xl hover:scale-110 hover:duration-200  `}
          >
            Explore
          </button>
</div>

</div>

       
      </div>


<Basicidea/>
<img  src='/images/triangle.png'className= 'mt-28   text-white block mx-auto' ></img>

<div className='flex justify-center'><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-24 mr-1 md:mr-6 sm:mr-16 h-0.5 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          W H Y<span className='sm:mx-4 mx-2'>B R A N D E S</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-24 sm:ml-16 ml-1 h-0.5 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
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
<Sweeper/>
<Letsdesign/>





     
      </div>
   
  );
}
