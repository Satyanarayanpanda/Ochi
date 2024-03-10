import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure mt-52 px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return <div className="masker">
                        <div className='w-fit flex overflow-hidden'>
                            {index===1 && (<motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76,0,0.24,1], duration: 1}} className='w-[7.5vw] h-[5vw] rounded relative top-[0.5vw] bg-red-500'></motion.div>)}
                            <h1 className='uppercase leading-[6vw] text-[7.5vw] tracking-tighter font-sans font-medium'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[1px] font-light text-md capitalize border-zinc-500 rounded-full'>Start</div>
                    <div className='w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage