import React ,{useState} from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
export const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div>
            <AiOutlineMenu size={20}/>
        </div>
        <div className='fixed left-0 top-0 h-full w-[60%] border-r bg-[#000300] bg-gray-600 border-r-gray-900'>
        <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>React.</h1>
            <ul className='pt-12 uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
