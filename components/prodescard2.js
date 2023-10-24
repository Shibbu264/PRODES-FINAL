import React from 'react'
import Image from 'next/image'


export default function ProdesCard2({data,image}) {

    return (
      
           

                <div className='border pt-6 flex-row justify-center items-end  rounded-[2.31px] bg-opacity-5 bg-white relative border-[#A965FF] border-x-2 border-y-2 w-[319.584px] h-[494.211px] flex-shrink-0  '>
                    <img
                        src={image}
                       className='block mx-auto my-10'
                        alt="char images"
                    />
                     <h2 className=" text-[#e0d1f1] mt-36  px-12 text-center  font-montserrat font-medium text-[20px] leading-[21.675px] tracking-[0.517px] ">{data}</h2>
                </div>

              
                   
                    

            

          
       
    )
}