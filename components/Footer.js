import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className=" footerbg1 w-[100%] h-fit m-0   pb-24  bg-cover bg-center bg-no-repeat text-white ">
    
        <div className="mt-12 sm:mt-[4.75rem] mb-32 bg-[#11001E]">
        <div className='flex justify-center items-center '>
            <div className='bg-gradient-to-r from-[#A965FF] via-transparent to-rgba(17, 0, 30, 0.00) w-full rotate-180  mr-1 h-[2.277px]  '></div>
            <h1 className="text-gray-200 w-[486.267px] flex-shrink-0 text-center font-montserrat  text-[28px] font-semibold tracking-wider leading-[127.5%]  ">
              C O N N E C T<span className='mx-2'>  W I T H</span> <span className='mx-2'>U S</span>
            </h1>
            <div className='bg-gradient-to-r from-[#A965FF] via-transparent to-rgba(17, 0, 30, 0.00) w-full h-[2.277px] ml-1  '></div>
          </div>
        </div>
       
<div className='sm:flex hidden sm:mx-0 mx-auto justify-center   mt-16  gap-4'>
          <div className='block bg-[#1C0230] w-[575px] h-[434px] p-8'>
              <div className="ml-4 font-custom  text-[24px] font-semibold tracking-[0.548px]">Before you go,</div>
              <div className="ml-4 font-custom  text-[24px] font-semibold tracking-[0.548px]">check out these links</div>
             <div>
              <img src='/images/Group 37.png' className="w-[37px] h-[49px] ml-6  mt-[8.75rem]" />
              <div className='flex  gap-4 ml-4 '>
                <div className="mt-[1.25rem] flex flex-col w-[145px] text-lg text-[#A965FF] font-medium">
                  <a href="" className="block   leading-7 tracking-wide  hover:text-[#F5F5F5]">About Brandes</a>
                  <a href="" className="block hover:text-[#F5F5F5]  leading-7 tracking-wide">Our Story</a>
                  <a href="" className="block hover:text-[#F5F5F5]  leading-7 tracking-wide">Support</a>
                  <a href="" className="block hover:text-[#F5F5F5]  leading-7 tracking-wide">Collaborations</a>
                </div>
                <div className="mt-[1.25rem] flex flex-col ml-20 font-custom text-[18px] tracking-[0.548px] text-[#A965FF] font-medium">
                  <a href="" className="mt-2 block w-72 hover:text-[#F5F5F5]">Explore the Bazaar</a>
                  <a href="" className="block w-72 hover:text-[#F5F5F5]">Explore Prodes</a>
                  <a href="" className="block w-72 hover:text-[#F5F5F5]">Hire from Squad</a>
                </div></div>
              </div>
</div>
        

<div className='flex-row justify-center items-center'>


         <div className='block w-[378px] h-[312px] p-8 bg-[#1C0230]'>
       <div>
            <div className=' '>
             <div className="text-neutral-100 text-2xl font-semibold font-['Montserrat'] leading-[34.50px] tracking-wide">Before you go, <br/>check out these links</div>
              <div className="mt-24 flex flex-col font-custom text-[18px] tracking-[0.548px] text-[#A965FF] font-medium">
                <a href="" className="block hover:text-[#F5F5F5]">Become a Sponsor</a>
                <a href="" className="block hover:text-[#F5F5F5]">Apply as a Mentor</a>
                <a href="" className="block hover:text-[#F5F5F5]">Host a Workshop</a>
            
            </div></div> </div>  </div>


            <div className="mt-4 block">
              <div className=" flex justify-center items-center gap-2 ">
                <div>
                  
                    <div  className='w-[118px] rounded-lg bg-[#1C0230] flex justify-center items-center h-[110px]'>
                      <img
                        src="/images/ig.svg"
                       className='w-[40.96px] h-[38.76px]'
                        alt="Instagram"
                      />
                    </div>
                 
                </div>
                <div>
                  
                    <div  className='w-[118px] rounded-lg bg-[#1C0230] flex justify-center items-center h-[110px]'>
                      <img
                        src="/images/linkedin.svg"
                        className='w-[40.96px] h-[38.76px]'
                        alt="LinkedIn"
                      />
                    </div>
                 
                </div>
                <div>
                 
                    <div  className='w-[118px] rounded-lg bg-[#1C0230] flex justify-center items-center h-[110px]'>
                      <img
                        src="/images/mail.svg"
                        className='w-[40.96px] h-[38.76px]'
                        alt="Email"
                      />
                    </div>
                
                </div>
              </div>
            </div>



            
     </div>
     
      </div>
 

      <div className='flex flex-col sm:hidden items-center mt-16 mx-8 text-center gap-8'>

  {/* Left Column */}
  <div className='block w-full sm:w-[40%] p-4 md:p-8 bg-[#1C0230]'>
    <div className="font-custom text-xl font-bold">Before you go,</div>
    <div className="font-custom text-xl font-bold">check out these links</div>
    <div className="mt-4 flex-col flex space-y-4 font-custom text-[1rem] text-[#A965FF] font-medium">
      <a href="" className="hover:text-[#F5F5F5]">About Brandes</a>
      <a href="" className="hover:text-[#F5F5F5]">Our Story</a>
      <a href="" className="hover:text-[#F5F5F5]">Support</a>
      <a href="" className="hover:text-[#F5F5F5]">Collaborations</a>
      <a href="" className="hover:text-[#F5F5F5]">Explore the Bazaar</a>
      <a href="" className="hover:text-[#F5F5F5]">Explore Prodes</a>
      <a href="" className="hover:text-[#F5F5F5]">Hire from Squad</a>
    </div>
  </div>

  {/* Right Column */}
  <div className='block w-full sm:w-[40%] p-4 md:p-8 bg-[#1C0230]'>
    <div className='p-4 md:p-12'>
      <div className="font-custom text-xl font-bold">Before you go,</div>
      <div className="font-custom text-xl font-bold">check out these links</div>
      <div className="mt-4 flex flex-col space-y-4 font-custom text-[1rem] text-[#A965FF] font-medium">
        <a href="" className="hover:text-[#F5F5F5]">Become a Sponsor</a>
        <a href="" className="hover:text-[#F5F5F5]">Apply as a Mentor</a>
        <a href="" className="hover:text-[#F5F5F5]">Host a Workshop</a>
      </div>
    </div>

    <div className="mt-4 block px-4">
      <div className="flex justify-between gap-4 sm:gap-10">
        <div>
         
            <div className='w-16 h-16'>
              <img
                src="/images/ig.svg"
                className='w-8 h-8'
                alt="Instagram"
              />
            </div>
          
        </div>
        <div>
        
            <div className='w-16 h-16'>
              <img
                src="/images/linkedin.svg"
                className='w-8 h-8'
                alt="LinkedIn"
              />
            </div>
         
        </div>
        <div>
         
            <div className='w-16 h-16'>
               <img
                src="/images/mail.svg"
                className='w-8 h-8'
                alt="Email"
              /> 
            </div>
         
        </div>
      </div>
    </div>
  </div>

</div>

      </div>
    
  )
}
