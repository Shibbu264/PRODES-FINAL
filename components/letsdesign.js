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
import Leftline from './leftline1';
import Rightline from './rightline';


export default function Letsdesign() {




  return (
    <div>
      <div className='flex justify-center items-center'><Leftline/>   <h1 className="text-gray-200 text-center font-montserrat flex-shrink-0 font-semibold text-[28px] leading-[35.7px] tracking-[10px] mx-12">
          LET'S DESIGN
        </h1><Rightline/></div>
     <div className='sm:flex flex-row  justify-evenly'>



     <div className='block mx-auto '>
      <div className='mt-24 text-center sm:text-[48px] font-semibold leading-[66.96px] text-3xl text-[#F5F5F5]'>
        <h1>Join our amazing & creative</h1><h1>
          Design Network!</h1></div>
          <div className='mt-16 text-[#A965FF] block mx-auto text-[24px] lg sm:w-[709px] text-center w-[80%] leading-[37.5px] tracking-[0.548px]  '>
        <p1 className="pt-12 mt-24 w-[709px] leading-[37.50px] tracking-wide mb-0">A new way of exploring design - one that is focused upon helping you build a network and build a creative foundation to boost your career
          </p1></div>
          <div className='flex justify-evenly items-center z-10  -translate-y-16   gap-44'>
          <img className='block w-[256px] h-[256px]  ml-32' src='/images/Saly-43.png'/>
          <h1 className='  sm:text-[17.565px] leading-[25.733px] w-[404px] h-[51px] text-center  text-[#F5F5F5] border-[#F5F5F5] sm:block mx-auto py-4 sm:px-5 text-lg rounded-[25px] border-x-2 border-y-2'> R E D E S I G N <span className='mx-3'>  Y O U R S E L F </span></h1>
          <img className='block mx-auto w-[256px] h-[256px]   mr-32 ' src='/images/image 116.png'/></div>
          
          </div>

         

          </div>

    </div>
  );
}
