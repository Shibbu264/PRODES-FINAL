import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { getAuth ,onAuthStateChanged} from 'firebase/auth';
import Letsdesign from '../components/letsdesign';
import ProdesCard from '../components/prodescard';
import Sweeper from '../components/ImageSlider';
import Leftline from '../components/leftline1';
import Rightline from '../components/rightline';
import ProdesCard2 from '../components/prodescard2';


export default function Prodes() {

const[value,setvalue]=useState(true)


  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-[#11001E]">
     <NavBar navbar={true} />

     --Hero
     <div className="bg-[#11001E] relative my-0 z-20 w-[100%]   sm:overflow-y-hidden sm:overflow-x-hidden ">
      <div className="sm:text-5xl text-3xl text-center mt-36 block mx-auto text-white">
        <h1 className="relative font-semibold" >
       Welcome to the <span className="text-[#A965FF]"> Bazaar</span>
        </h1>
        <h1 className="my-3 font-semibold" >
         of Infinite Design!
        </h1>
      </div>



    
  
   <div className='flex justify-center  my-12 mt-16 '>
   <span class={value?'mr-6 text-xl text-[#A965FF] font-medium  dark:text-gray-300':'mr-6 text-xl text-[#F5F5F5] font-medium  dark:text-gray-300'}>Designer</span>
   <div className='scale-125 ml-4 mt-1'><label class="relative inline-flex items-center mr-5 cursor-pointer">
 
  <input type="checkbox" onClick={()=>{setvalue(!value)}} value="" class="sr-only peer" />
  
  <div class="w-11 h-6  rounded-full border-[#A965FF] border-2 peer   peer-focus:ring-4 peer-focus:ring-[#11001E] dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full  after:content-[''] after:absolute  after:left-[2px] after:bg-white after: after:border after:rounded-full after:h-5 after:w-5 after:transition-all  "></div>
  
</label></div><span class={value?'ml-6 text-xl text-[#F5F5F5] font-medium  dark:text-gray-300':' ml-6 text-xl  text-[#A965FF] font-medium  dark:text-gray-300'}>Company</span>
</div>
    
   <img src='/images/Group 33605.svg' className='z-30  sm:block hidden mx-auto'/>
   <img  src='/images/triangle.png'className= 'mt-28 w-[15px] h-[15px]   text-white block mx-auto  ' ></img>
 





    
    </div>
    <div className="mt-12  sm:overflow-y-hidden sm:mt-[8.75rem]">
     <div className='flex justify-center items-center '> <Leftline/>   <h1 className="mx-12 font-medium text-[28px] font-heading leading-[35.7px] tracking-[10px]  text-center text-[#F5F5F5] sm:text-[28px] ">
     WHAT<span className='mx-2'></span>IS<span className='mx-2'></span>BAZAAR
        </h1><Rightline/></div></div>
        <img src="/images/Union.png" alt="Image 2" class="w-8 h-8 absolute right-0  mt-36 ml-auto mr-72"/>
        <div class="flex flex-col items-center justify-center mb-18 sm:mt-24  mt-12">
    <div class="sm:flex  sm:flex-row flex-col sm:gap-0 gap-10  justify-center">
    <img src="/images/Union.png" alt="Image 2" class="w-8 absolute left-52 h-8 mb-0"/>
        <div class="flex flex-col items-center  my-32   sm:mt-48 mx-12">
            <img src="/images/image 109.png" alt="Image 1" class="w-[148px] h-[148px] mb-2"/>
           
            <p class="p-2 w-[181px] text-[14px] font-medium text-center h-32 rounded text-[#F5F5F5] mt-2">How you doin’ cheerful minds? </p>
        </div>
        
        <div class="flex flex-col items-center sm:my-0 my-32  sm:mt-16 mx-12">
       
            <img src="/images/image 126.png" alt="Image 2" class="w-[188px] h-[150px] mb-2"/>
           
            <p class="p-2 w-[181px] text-[14px] font-medium text-center h-32 rounded text-[#F5F5F5] mt-2">Confused on how to implement your Design learnings?</p>
        </div>
        
        <div class="flex flex-col items-center sm:my-0 my-32  mb-6 mx-12">
            <img src="/images/image 127.png" alt="Image 3" class="w-[170px] h-[170px] mb-2"/>
           
            <p class="p-2 w-[181px] text-[14px] font-medium text-center h-32 rounded text-[#F5F5F5] mt-2 ">Brandes <span className='text-[#A965FF]'>Bazaar </span>  brings you the platform to explore yourself</p>
        </div>
        <div class="flex flex-col items-center my-32 sm:my-0 sm:mt-16 sm:mb-3 mx-12">
            <img src="/images/image 128.png" alt="Image 4" class="w-[162px] h-[162px] mb-2"/>
           
            <p class="p-2 w-[181px] text-[14px] font-medium text-center h-32 rounded text-[#F5F5F5] mt-2 ">Join into paid projects, collaborative design ventures & much more</p>
        </div>
      
        <div class="flex flex-col items-center sm:my-0 my-32  sm:mt-48 mb-4 mx-12">
            <img src="/images/image 111.png" alt="Image 5" class="w-[169px] h-[143px] mb-2"/>
           
            <p class="p-2 w-[181px] text-[14px] font-medium text-center h-32 rounded text-[#F5F5F5] mt-2 ">Win internship, job and other freelance opportunities</p>
        </div>
    </div>
</div>

<img src="/images/Union.png" alt="Image 2" class="w-8 absolute left-72 h-8 mb-0"/>
<div className="sm:text-5xl text-3xl text-center block mx-auto text-white">
<img src="/images/Union.png" alt="Image 2" class="w-8 h-8 absolute   mt-[278px] ml-auto right-48 mr-72"/>
        <h1 className="relative  text-[33.57px] mt-20 font-medium" >
        Enter into the space of
        </h1>
        <h1 className="my-4 text-[33.57px] font-medium text-[#A965FF]" >
        Collaborations
        </h1>

        
      </div>
      <h1 className=' w-[333px]  my-20 text-xl text-center  text-[#F5F5F5] border-[#F5F5F5] sm:block mx-auto py-4 sm:px-6 px-3 rounded-[28px] border-x-2 border-y-2'> E N T E R<span className='mx-3'>B A Z A A R</span></h1>
<div className='my-24 titu h-fit sm:flex sm:bg-no-repeat py-6 sm:py-0  block mx-auto justify-between'>
<h1 className='sm:text-5xl block my-auto mx-auto font-semibold w-[50%] text-2xl text-[#F5F5F5]'>What makes the Bazaar exclusive, unique and interactive? </h1>
<img src='/images/image 114.png' className='block m-auto'/>

</div>
{value?
<>
<img src='/images/Vector 22.png' className='block sm:hidden mx-auto w-4 h-36'/>
<div class="flex flex-col   justify-center items-center mb-24 sm:mt-24 mt-12">
    <div class="sm:flex w-[90%]  sm:flex-row flex-col sm:gap-20 gap-10 justify-center">
  
       

        <div class="flex flex-col items-center sm:my-0 my-32   ">
       
            <img src="/images/image 118.png" alt="Image 2" class="w-[228px] h-[228px] mb-14"/>
           
            <p class="h-[114px] w-[362px] text-center leading-[37.88px] tracking-tight  rounded text-[#F5F5F5] sm:text-[24px] font-medium  semibold text-2xl  "><span className='text-[#A965FF]'>Industry-level projects </span> & experience associated with amazing brands</p>
        </div>
        
        <div class="flex flex-col items-center sm:my-0 my-32  mb-2 ">
            <img src="/images/image 116.png" alt="Image 3" class="w-[228px] h-[228px] mb-14"/>
           
            <p class="h-[114px] w-[362px] text-center leading-[37.88px] tracking-tight rounded text-[#F5F5F5] sm:text-[24px] font-medium semibold text-2xl   "><span className='text-[#A965FF]'>Collaborate</span> with <br></br> experts over well-paid<br/> joint design ventures  </p>
        </div>
        
        <div class="flex flex-col items-center my-32 sm:my-0  ">
            <img src="/images/Group 33603.png" alt="Image 4" class="w-[228px] h-[228px] mb-14"/>
           
            <p class="h-[114px] w-[362px] text-center leading-[37.88px] tracking-tight  rounded text-[#F5F5F5] sm:text-[24px] font-medium  semibold text-2xl  ">Get the right internship 
            <br/>and job <span className='text-[#A965FF]'>opportunities</span>;<br/> the right way</p>
        </div>
        
        
    </div>
</div>
</>: <><Sweeper/><div className='mb-20'></div></>}


<div className='flex justify-center items-center mt-48'><Leftline/>
 {value? <h1 className="font-semibold font-heading  text-center text-[#F5F5F5] mx-16 text-lg sm:text-[28px] tracking-[10px]">OPPURTUNITIES</h1>:<h1 className="font-bold font-heading  text-center text-[#F5F5F5] mx-16 text-lg sm:text-[28px] tracking-[10px] flex-shrink-0 ">OUR<span className='mx-2'></span>PORTFOLIO</h1>}     
       <Rightline/></div>



{value? <div className='sm:flex w-[90%] mt-24  block mx-auto justify-center sm:gap-[1.5%]'>
<div className='mt-24 mb-32  scale-y-[80%]'>
<ProdesCard2 image="/images/image 130.png" data="Jobs & Internships" />
</div>
<div className='scale-y-[80%]'>
<ProdesCard2 image="/images/image 153.png"  data="Real-world projects" /></div>
<div className='mt-24'>
    <div className='scale-y-[80%]'>
<ProdesCard2 image="/images/image 129.png" data="Events & Challenges" />
</div>
</div></div> :
<div className='sm:flex w-[90%] mt-24  block mx-auto justify-center sm:gap-[1.5%]'>
<div className='mt-16 mb-32 scale-y-[80%]'>
<ProdesCard image="/images/image 130.png" data="Branding" />
</div>
<div className='scale-y-[80%]'>
<ProdesCard image="/images/image 153.png"  data="UI/UX Design" /></div>
<div className='mt-16 scale-y-[80%]'>
<ProdesCard image="/images/image 129.png" data="Graphics & Visuals" />
</div></div>

}





<div className=' mb-32 sm:flex sm:flex-row flex-col justify-between'>
  
    <div className=' mx-auto block'>
<img  src='/images/Group 7018.png' className= ' w-18 h-18 mb-4  text-white block mx-auto' ></img>
<h1 className='text-[#DFC5FF] text-center text-2xl'>and much more </h1></div>

</div>



<Letsdesign/>
      <Footer />
    </div>
  );
}



