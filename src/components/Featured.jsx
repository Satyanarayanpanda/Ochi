import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Featured() {
    const [isHovering, setHovering] = useState(false)

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-sans tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <div className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='absolute flex left-full text-[#CDEA68] overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-sans'>
                            {"FYDE".split('').map((item, index) => <span className='inline-block translate-y-full'>{item}
                            </span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className="cardcontainer relative w-1/2 h-[80vh]">
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <h1 className='absolute flex overflow-hidden right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-sans'>
                                {"VISE".split('').map((item, index) => <motion.span
                                    className='inline-block translate-y-full'
                                    initial={{ y: "100%" }}
                                    animate={isHovering ? ({ y: "0" }) : ({ y: "100%" })}>{item}
                                </motion.span>)}
                            </h1>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured