import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium distinctio numquam necessitatibus facilis officiis. Enim expedita doloribus officia odio suscipit sapiente! Veniam deserunt dolor, ad quas aspernatur ratione optio distinctio?</p>
         <br />
         <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam at, animi eum tempora hic, placeat cupiditate sapiente dolore veniam voluptate impedit quae est, quos officiis? Repudiandae, quaerat? Incidunt, doloribus soluta.</p>
      </div>
    </div>
  )
}
