import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footerbg bg-cover bg-center bg-no-repeat w-full">
      <div className="flex-col mt-[8.75rem] text-white max-w-[90%] mx-auto">
        <div className="mt-12 sm:mt-[4.75rem]">
          <div className='flex justify-center'>
            <div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-28 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>
            <h1 className="font-bold font-heading text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
              C O N N E C T<span className='sm:mx-4 mx-2'>W I T H</span> <span className='sm:mx-4 mx-2'>U S</span>
            </h1>
            <div className='bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-28 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-[3.75rem]">
          <div className="w-full sm:w-96 bg-[#1C0230] py-8 md:w-1/4 px-16">
            <div className="flex flex-col a1">
              <div className="font-custom text-[1.5rem] font-bold">Before you go,</div>
              <div className="font-custom text-[1.5rem] font-bold">check out these links</div>
              <img src='/images/Group 37.png' className="w-12 h-12 mt-[3.75rem]" />
              <div className='flex mt-2 gap-4 sm:gap-[30%]'>
                <div className="mt-[1.25rem] flex flex-col font-custom text-[1.25rem] text-[#A965FF] font-medium">
                  <a href="" className="block hover:text-[#F5F5F5]">About Brandes</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Our Story</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Support</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Collaborations</a>
                </div>
                <div className="mt-[1.25rem] flex flex-col font-custom text-[1.25rem] text-[#A965FF] font-medium">
                  <a href="" className="mt-2 block hover:text-[#F5F5F5]">Explore the Bazaar</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Explore Prodes</a>
                  <a href="" className="block hover:text-[#F5F5F5]">Hire from Squad</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-0 bg-[#1C0230] mx-8 a2 md:w-1/3 mt-8 sm:mt-0">
            <div className='p-4 md:p-12'>
              <div className="font-custom text-[1.5rem] font-bold">Before you go,</div>
              <div className="font-custom text-[1.5rem] font-bold">check out these links</div>
              <div className="mt-4 flex flex-col font-custom text-[1.25rem] text-[#A965FF] font-medium">
                <a href="" className="block hover:text-[#F5F5F5]">Become a Sponsor</a>
                <a href="" className="block hover:text-[#F5F5F5]">Apply as a Mentor</a>
                <a href="" className="block hover:text-[#F5F5F5]">Host a Workshop</a>
              </div>
            </div>
            <div className="mt-4 px-12">
              <div className="mt-[1.25rem] flex flex-row gap-4 sm:gap-10">
                <div>
                  <Link href="https://www.instagram.com/iitbhu_mun/?hl=en">
                    <button>
                      <Image
                        src="/images/ig.svg"
                        width={34}
                        height={34}
                        alt="Instagram"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.linkedin.com/company/iitbhumun/?originalSubdomain=in">
                    <button>
                      <Image
                        src="/images/linkedin.svg"
                        width={34}
                        height={34}
                        alt="LinkedIn"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:your@example.com">
                    <button>
                      <Image
                        src="/images/mail.svg"
                        width={34}
                        height={34}
                        alt="Email"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
