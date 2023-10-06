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
import Leftline from './leftline1';
import Rightline from './rightline';



export default function Main() {
  return (
    <div className="w-screen z-20 relative  mx-auto  bg-[#11001E]  flex flex-col space-y-24">
    
      <div className="mt-12 sm:mt-[8.75rem]">
     <div className='flex justify-center items-center w-[100%]'>
      <Leftline/>
       <h1 className="w-[375.006px] flex-shrink-0 text-gray-200 text-center font-montserrat text-[28px] font-semibold tracking-wider leading-[127.5%] ">
          O U R <span className='sm:mx-4 mx-2'> M I S S I O N</span>
        </h1>
        <Rightline/>
        </div>
       

<h1 className=' mt-24 mb-36 text-gray-200 text-center font-montserrat text-[42px] font-semibold leading-[65.739px] tracking-[0.548px]'>Building an Interactive<span className='text-[#A965FF]'> Design</span> Ecosystem</h1>

<Card/>
<div className='w-[90%] justify-center sm:flex block mx-auto '>
  <div>
<img className='sm:flex hidden w-[629.144px]
h-[550px]
flex-shrink: 0 ' src='/images/HowWeWorkIllustration.png'/></div>
<div>
<img className='flex w-80 mt-24 h-16'  src='/images/Group 7089.svg'/>
<h1 className='text-3xl mt-10 font-bold text-[#F5F5F5]'>The exclusive marketplace</h1>
<h1 className='text-3xl font-bold text-[#F5F5F5]'>for everything Design</h1>
<p className='w-[499.119px] h-[50.028px] flex-shrink-0 text-[#DFC5FF] font-montserrat text-[18px] font-normal leading-[138.5%] mt-6'>A common platform connecting amazing brands with the best & most trusted designers</p>
<Link href='/Bazaar'><button 
            className={`flex items-center gap-10 mt-12 rounded-[8px] text-[18px]  px-[37px] py-[13px] justify-center flex-shrink-0 text-[#F5F5F5] w-[167.969px] h-[51.029px]  font-semibold  sm:py-1 border-[#8049C3] border-x border-y   hover:bg-[#8049C3] hover:duration-200  `}
          >
            Explore
          </button></Link>
</div>

</div>

       
      </div>


<Basicidea/>
<img  src='/images/triangle.png'className= 'mt-28   text-white block mx-auto' ></img>

<div className='flex justify-center items-center'><Leftline/><h1 className="flex-shrink-0 text-gray-200 text-center font-montserrat font-semibold text-[28px] leading-[35.7px] tracking-[10px] w-[375.006px] line-height-[35.7px]">WHY<span className='sm:mx-4 mx-2'>BRANDES</span>
        </h1><Rightline/></div>
<div className='sm:flex w-[90%] block mx-auto justify-center sm:gap-[2%]'>
  <div className='circle absolute mt-0 mr-48 '></div>
<div className='mt-16'>
<ProdesCard image="/images/Saly-41.png" data="Brandes empowers you to 
bring life into your work/ideas 
magnificiently" />
</div> <div className='circle absolute mt-16 mr-[940px]'></div>
<ProdesCard image="/images/Saly-39.png"  data="An entire FREE community 
of self-learned and 
experienced designers" />
<div className='mt-16'> <div className='circle absolute mt-0 ml-32'></div>
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
