import { useState } from "react";
import data from "../data/data.json";
import Image from 'next/image';
import TeamCard from "./TeamCard";

export default function Card() {

    
    
    
    return (
        
           <div className="w-[90%] sm:flex block my-12 mx-auto justify-evenly h-fit ">

<div className="">
<img className="sm:mr-auto mx-auto  block" src="/images/Group 7088.png"></img>
<h1 className="text-[#F5F5F5] mt-8 font-bold text-4xl md:3xl sm:2xl block">Enter the world of,for & by the designers.</h1>
<p className="mt-8  text-xl text-[#DFC5FF]">An empathy-driven community of design enthusiasts to learn design from scratch</p>

         <button 
            className={`px-12  2xl:px-12  mt-8 block sm:inline mx-auto rounded-md text-[2.125rem] text-[#F5F5F5]  font-semibold  sm:py-1  bg-[#8049C3] hover:rounded-2xl hover:scale-110 hover:duration-200  `}
          >
            Explore
          </button>
</div>

<div className="flex sm:my-0 my-12 ">
    <TeamCard/>
    
     </div>






           </div>
    );
}

    