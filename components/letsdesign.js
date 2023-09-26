import Image from 'next/image';
import Link from 'next/link';
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";

import app from "../public/firebaseconfig";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from 'react';
import { useRouter } from "next/router";
import Register from './CloseReg';
import { getAuth, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth';
import Script from 'next/script';


export default function Letsdesign() {




  return (
    <div>
      <div className='flex justify-center'><div className='bg-gradient-to-l from-[#A965FF] to-[#F5F5F5] sm:w-80 md:w-52 w-24 mr-1 md:mr-6 sm:mr-16 h-1 sm:mt-1 mt-3'></div>   <h1 className="font-bold font-heading  text-center text-[#F5F5F5] text-lg sm:text-[2.5rem] ">
          L E T ' S<span className='sm:mx-4 mx-2'>D E S I G N</span>
        </h1><div className=' bg-gradient-to-r from-[#A965FF] to-[#F5F5F5] sm:w-80 w-24 sm:ml-16 ml-1 h-1 md:w-52 md:ml-6 sm:mt-1 mt-3'></div></div>
     <div className='sm:flex flex-row  justify-evenly'>

<img className='block w-56 h-56 mt-28 ml-32' src='/images/Saly-43.png'/>

     <div className='block mx-auto '>
      <div className='mt-24 text-center sm:text-5xl text-3xl text-[#F5F5F5]'>
        <h1>Join our amazing & creative</h1><h1>
          Design Network!</h1></div>
          <div className='mt-24 text-[#A965FF] block mx-auto text-2xl lg sm:w-[40%] w-[80%]  '>
        <p1 className="py-12">A new way of exploring design - one that is focused upon helping you build a network and build a creative foundation to boost your career
          Design Network!</p1>
          <h1 className=' my-20 text-xl text-center  text-[#F5F5F5] border-[#F5F5F5] block mx-auto py-4 sm:px-5 rounded-3xl border-x-2 border-y-2'> R E D E S I G N<span className='mx-6'> Y O U R S E L F </span></h1>
          </div>
          </div>

          <img className='block mx-auto h-56 mt-28 w-56 mr-32 ' src='/images/image 116.png'/>

          </div>

    </div>
  );
}
