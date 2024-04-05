import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>Hello, I'm Jaspreet Singh, a professional Full Stack Developer with expertise in a wide range of technologies. My skills include HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React.js, Next.js, MERN stack, PHP, MongoDB, MySQL database, Photoshop, Figma, Adobe XD, and more.

I completed my schooling from Jawahar Navodaya Vidyalaya, Sector 25, Chandigarh, and pursued my Bachelor's in Computer Applications (BCA) from Post Graduate Government College, Sector 11, Chandigarh.</p>
         <br />
         <p className='text-xl mt-10'>I'm passionate about crafting exceptional web experiences and thrive on challenges. Let's collaborate and bring your ideas to life!</p>
      </div>
    </div>
  )
}
