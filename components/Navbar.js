import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from 'react';
import Register from './CloseReg';


export default function NavBar({navbar }) {

  const [closeReg, setCloseReg] = useState(true);
  const [display, buttonhide] = useState(false);
  const handleChange = () => {
    setCloseReg(false);
    setTimeout(() => {
      setCloseReg(true);
    }, 1000);
    buttonhide(true)
  }
  return (
    <div
      className={` w-screen z-30 font-medium bg-[#11001E] text-white sm:py-3 
         shadow-lg border-b border-[#8049C3]  `
       
        }
    >
      <div className="hidden sm:flex flex-row items-center justify-between mx-16">
        <div>
        <Image
          src="/images/brand.png"
          width={95}
          height={35}
          alt="active-nav-logo"
        />
        </div>
        <div className="justify-end hidden items-center sm:flex space-x-11 2xl:space-x-18 font-medium">
          <Link href="/home">
            <button className=" 2xl:text-xl hover-underline text-[#A965FF] duration-100">
              Home
            </button>
          </Link>
          <Link href="/Prodes">
            <button className="2xl:text-xl hover-underline text-lg hduration-100">
              Prodes
            </button>
          </Link>
          <Link href="/Bazaar">
            <button className="2xl:text-xl hover-underline  text-lg  duration-100">
              Enter Bazaar
            </button>
          </Link>
          <Link href="/">
            <button className="2xl:text-xl hover-underline  text-lg  duration-100">
             The Squad
            </button>
          </Link>
          <Link href="/">
            <button className="2xl:text-xl hover-underline  text-lg  duration-100">
              Contact
            </button>
          </Link>
         

          <Link href="/loginpage">
         <button onClick={handleChange}
            className={`px-12 2xl:px-12 h-10 rounded-md text-[1.125rem] text-[#F5F5F5] font-semibold mx-4   border-[#8049C3] border-x border-y   hover:bg-[#8049C3] hover:duration-200    `}
          >
            Login
          </button></Link>
         
         
        </div>
      </div>
      <div
        className={`sm:hidden w-full flex ${navbar
          ? 'items-center justify-between p-2'
          : 'flex justify-between w-full p-6'
          }`}
      >
        <div>
          <Menu>
            <MenuHandler className={`${!navbar ? 'hidden' : ''}`}>
              <Image
              
                src="/images/menuicon.png"
                width={52}
                height={35}
                alt="menuicon"
              />
            </MenuHandler>
            <MenuList className="sm:hidden absolute z-30 top-0 h-full w-[100vw] rounded-none flex flex-col items-center justify-center bg-[#11001E] bg-opacity-80 text-white text-3xl font-heading font-bold text-center backdrop-blur-lg">
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/">Home</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/Prodes">Prodes</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/Bazaar">Enter Bazaar</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/">The Squad</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/">Contact</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/">FAQs</Link></MenuItem>
              <MenuItem className='text-center text-xl pt-12'><button className='text-black bg-white px-4 rounded-lg'>Close</button></MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className={`${!navbar ? 'hidden' : ''}`}>
          <Image
            src="/images/brand.png"
            width={90}
            height={45.45}
            alt="mobile-activenav-logo"
          />
        </div>
       
          
          <button  className="py-2 px-[1.5rem] mr-6 text-xs font-custom font-semibold text-white bg-[#8049C3] rounded-lg">
                 <Link href={'/'}>    Login</Link> 
                </button>
      </div>
    </div>
  );
}
