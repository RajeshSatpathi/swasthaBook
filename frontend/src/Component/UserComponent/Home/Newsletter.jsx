import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
export default function Newsletter() {
    return (
        <div className='p-4'>
            <div className='h-40 rounded-2xl p-2 container mx-auto flex flex-wrap justify-around items-center 
            my-10 bg-gradient-to-b from-[#016AE8] to-[#90E3FE]'>
                <div>
                    <h2 className='body-font lg:text-4xl text-xl text-white font-semibold text-shadow-2xs'>
                        Working for Your Better Health.</h2>
                </div>
                <div>
                    <div className='flex gap-3   '>
                        <div className='size-15 bg-white rounded-full flex  justify-center items-center'>
                            <TfiHeadphoneAlt size={22} />
                            </div>
                        <div className='flex flex-col text-white'>
                            <span className='text-sm'>Customer Support</span>
                            <span>8967689621</span>
                        </div>
                             <div className='size-15 bg-white rounded-full flex justify-center items-center'>
                            <TfiEmail size={22} />
                            </div>
                        <div className='flex flex-col text-white'>
                            <span className='text-sm'>Drop an email Us</span>
                            <span>8967689621</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
