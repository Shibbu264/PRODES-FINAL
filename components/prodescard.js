import React from 'react'
import Image from 'next/image'


export default function ProdesCard({data,image}) {

    return (
        <div className="">
            <div className="p-2  ">

                <div className=' relative border-[#6614d1] border-x-2 border-y-2 shadow-[#f5f5f5] shadow-md '>
                    <img
                        src={image}
                       className='block mx-auto my-10'
                        alt="char images"
                    />
                     <h2 className="text-xl text-center mx-4 text-[#F5F5F5] mb-6 pt-6 ">{data}</h2>
                </div>

              
                   
                    

            

            </div>
        </div>
    )
}