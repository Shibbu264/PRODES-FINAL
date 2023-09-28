import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className=" footerbg1 w-[100%] h-fit m-0   py-24  bg-cover bg-center bg-no-repeat text-white ">
    
        <div className="mt-12 sm:mt-[4.75rem]">
          <div className='flex justify-center'>
            <div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-20 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>
            <h1 className="font-bold font-heading text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
              C O N N E C T<span className='sm:mx-4 mx-2'>W I T H</span> <span className='sm:mx-4 mx-2'>U S</span>
            </h1>
            <div className='bg-gradient-to-r from-[#A965FF] to-[#F5F5F5]  sm:w-80 w-20 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div>
          </div>
        </div>
       
<div className='sm:flex hidden sm:mx-0 mx-auto justify-center   mt-16  gap-[10%]'>
          <div className='block bg-[#1C0230] w-[40%] p-8'>
              <div className="ml-4 font-custom  text-[1.5rem] font-bold">Before you go,</div>
              <div className="ml-4 font-custom  text-[1.5rem] font-bold">check out these links</div>
             <div>
              <img src='/images/Group 37.png' className="w-20 h- mt-[3.75rem]" />
              <div className='flex mt-2 gap-4 sm:gap-[20%]'>
                <div className="mt-[1.25rem] flex flex-col font-custom text-[2.00rem] text-[#A965FF] font-medium">
                  <a href="" className="block text-[1.85rem]  hover:text-[#F5F5F5]">About Brandes</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Our Story</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Support</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Collaborations</a>
                </div>
                <div className="mt-[1.25rem] flex flex-col font-custom text-[2.00rem] text-[#A965FF] font-medium">
                  <a href="" className="mt-2 block w-72 hover:text-[#F5F5F5]">Explore the Bazaar</a>
                  <a href="" className="block w-72 hover:text-[#F5F5F5]">Explore Prodes</a>
                  <a href="" className="block w-72 hover:text-[#F5F5F5]">Hire from Squad</a>
                </div></div>
              </div>
</div>
             
         <div className='block w-[40%] p-8 bg-[#1C0230]'>
       <div>
            <div className='p-4 md:p-12'>
              <div className="font-custom text-[1.5rem] font-bold">Before you go,</div>
              <div className="font-custom text-[1.5rem] font-bold">check out these links</div>
              <div className="mt-4 flex flex-col font-custom text-[1.25rem] text-[#A965FF] font-medium">
                <a href="" className="block hover:text-[#F5F5F5]">Become a Sponsor</a>
                <a href="" className="block hover:text-[#F5F5F5]">Apply as a Mentor</a>
                <a href="" className="block hover:text-[#F5F5F5]">Host a Workshop</a>
            
            </div></div>
            <div className="mt-4 block px-12">
              <div className=" flex justify-between gap-4 sm:gap-10">
                <div>
                  <Link href="">
                    <div  className='w-48 h-48'>
                      <img
                        src="/images/ig.svg"
                       className='w-16 h-16'
                        alt="Instagram"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="">
                    <div  className='w-48 h-48'>
                      <img
                        src="/images/linkedin.svg"
                        className='w-16 h-16'
                        alt="LinkedIn"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:your@example.com">
                    <div  className='w-48 h-48'>
                      <img
                        src="/images/mail.svg"
                        className='w-16 h-16'
                        alt="Email"
                      />
                    </div>
                  </Link>
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
          <Link href="">
            <div className='w-16 h-16'>
              <img
                src="/images/ig.svg"
                className='w-8 h-8'
                alt="Instagram"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href="">
            <div className='w-16 h-16'>
              <img
                src="/images/linkedin.svg"
                className='w-8 h-8'
                alt="LinkedIn"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href="mailto:your@example.com">
            <div className='w-16 h-16'>
              <img
                src="/images/mail.svg"
                className='w-8 h-8'
                alt="Email"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

</div>

      </div>
    
  )
}
