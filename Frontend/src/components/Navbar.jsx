import React, { useContext, useState } from 'react'
import images from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa'
import { IoMdCart, IoMdClose } from 'react-icons/io'
import { RiMenu2Fill } from 'react-icons/ri'
import { shopContext } from '../context/Shopcontext'

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch } = useContext(shopContext)

    return (
        <div className='flex justify-between items-center filter:drop-shadow-md py-5 font-medium '>
            <Link to='/'>
                <img className='h-12 w-auto' style={{ filter: 'invert(1)', brightness: 1.2, contrast: 1.2 }} src={images.Icon} alt="Trendora logo" />
            </Link>
            {/** <h1>TRENDORA</h1> */}

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1' >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>

            <div className='flex items-center gap-6 '>
                <FiSearch onClick={() => { setShowSearch(true) }} size={20} className='w-5 cursor-pointer' />

                <div className='group relative '>
                    <FaRegUser className='w-5 cursor-pointer' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Order</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <IoMdCart size={20} />
                    <p className='absolute bottom-2.5 left-1.5 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
                </Link>
                <RiMenu2Fill onClick={() => { setVisible(true) }} size={20} className=' cursor-pointer sm:hidden' />
            </div>


            {/* Slide bar menu for samll screen */}
            <div className={`${visible ? 'w-full' : 'w-0'} absolute right-0 bottom-0 top-0 transition-all bg-white`}>
                <div className='flex flex-col text-gray-600 overflow-x-hidden'>
                    <div onClick={() => { setVisible(false) }} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <IoMdClose size={20} className='block' />
                    </div>
                    <NavLink onClick={() => { setVisibl(false) }} to='/' className='p-2 pl-6 border hover:bg-black hover:text-white' style={({ isActive }) => ({ background: isActive ? "black" : "", color: isActive ? "white" : "" })}>HOME</NavLink>
                    <NavLink onClick={() => { setVisible(false) }} to='/collection' className='p-2 pl-6 border-b hover:bg-black hover:text-white' style={({ isActive }) => ({ background: isActive ? "black" : "", color: isActive ? "white" : "" })} >COLLECTION</NavLink>
                    <NavLink onClick={() => { setVisible(false) }} to='/about' className='p-2 pl-6 border-b hover:bg-black hover:text-white' style={({ isActive }) => ({ background: isActive ? "black" : "", color: isActive ? "white" : "" })}>ABOUT</NavLink>
                    <NavLink onClick={() => { setVisible(false) }} to='/contact' className='p-2 pl-6 border-b hover:bg-black hover:text-white' style={({ isActive }) => ({ background: isActive ? "black" : "", color: isActive ? "white" : "" })}>CONTACT</NavLink>
                </div>
            </div>



        </div>
    )
}

export default Navbar
