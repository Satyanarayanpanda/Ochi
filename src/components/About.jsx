import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-sans text-[4vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#b8c87d]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#92a64a] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About