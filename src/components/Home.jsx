import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/myprofile.jpg"

export default function Home() {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'> 
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>I'm Jaspreet, a passionate Full Stack Developer specializing in React ,MERN stack, Next.js, and more. Let's turn your ideas into captivating digital experiences!</p>

            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#FFB461] to-[#F87628] cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span> 
                </button>
            </div>
        </div>

        <div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-1/2' />
        </div>
      </div>
    </div>
  )
}
