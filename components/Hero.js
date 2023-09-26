import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CloseReg from './CloseReg';

export default function Hero() {
  const [closeReg, setCloseReg] = useState(true);

  return (
    <div className="bg-[#11001E] relative my-0 z-20 w-screen h-fit">
      <div className="sm:text-5xl text-3xl text-center block mx-auto text-white">
        <h1 className="relative mt-20" style={{ opacity: 0, animation: 'fadeIn 1s forwards' }}>
          Learn, Create and Experiment
        </h1>
        <h1 className="my-2" style={{ opacity: 0, animation: 'fadeIn 1s forwards 0.5s' }}>
          Everything <span className="text-[#A965FF]">Design</span>
        </h1>
      </div>
      <div className="h-96"></div>
      <img
        src="/images/triangle.png"
        className="z-20 text-white block mx-auto"
        style={{
          transition: 'transform 0.3s ease-in-out', // Add a transition to the 'transform' property
        }}
        onFocus={(e) => {
          e.target.style.transform = 'scale(1.1)'; // Increase size on focus
        }}
        onBlur={(e) => {
          e.target.style.transform = 'scale(1)'; // Reset size on blur
        }}
      ></img>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
