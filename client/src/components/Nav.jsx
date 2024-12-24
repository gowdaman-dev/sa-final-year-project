import React from 'react'
import { logo } from './constant'
import { FaHome, FaUser, FaPhone, FaChevronCircleLeft, FaAngleDoubleLeft } from 'react-icons/fa'
function Nav() {
  return (
    <nav className='h-screen w-[350px] border-r p-4 relative'>
        <div className="absolute cursor-pointer -right-[15px] h-[30px] flex items-center justify-center w-[30px] bg-white rounded-full border">
            <FaAngleDoubleLeft className='font-sm text-sm'/>
        </div>
        <img src={logo} alt='logo' className=' w-1/2' />
        <div className="flex flex-col gap-4 py-[2rem]">
            <a href="#" className="bg-zinc-50 p-2 rounded hover:bg-blue-500 hover:text-white text-gray-800 transtion-color ease-linear duration-300">
                <span className='p-1 rounded-full bg-sky-400 h-fit'>H</span>
                Home</a>
            <a href="#" className="bg-zinc-50 p-2 rounded hover:bg-blue-500 hover:text-white text-gray-800 transtion-color ease-linear duration-300">About</a>
            <a href="#" className="bg-zinc-50 p-2 rounded hover:bg-blue-500 hover:text-white text-gray-800 transtion-color ease-linear duration-300">Contact</a>
        </div>
    </nav>
)
}

export default Nav