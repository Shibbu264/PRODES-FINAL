import { useState } from "react";
import data from "../data/data.json";
import Image from 'next/image';
import TeamCard from "./TeamCard";
import Link from "next/link";

export default function Card() {

    
    
    
    return (
        
           <div className="w-[90%] sm:flex block my-12 mx-auto justify-evenly h-fit ">

<div className="">
<img className="mr-auto   block" src="/images/Group 7088.svg"></img>
<h1 className="w-[423.278px] h-[84.015px] flex-shrink-0 text-white font-montserrat text-[31.411px] font-bold leading-[41.881px] mt-8  block">Enter the world of,for & by the designers.</h1>
<p className="mt-6  w-[438.136px] h-[50.009px] flex-shrink-0 text-[#DFC5FF] font-montserrat text-[18px] font-normal leading-[138.5%]">An empathy-driven community of design enthusiasts to learn design from scratch</p>

<Link href='/Prodes'><button 
            className={`px-12  2xl:px-12  mt-8 block sm:inline mx-auto rounded-md text-[2.125rem] text-[#F5F5F5]  font-semibold  sm:py-1   border-[#8049C3] border-x border-y   hover:bg-[#8049C3] hover:duration-200   `}
          >
            Explore
          </button></Link>
</div>

<div className="flex sm:my-0 my-12 ">
    <img src="/images/Group 33604.svg"/>
    
     </div>






           </div>
    );
}

    