import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [showmenu, setShowmenu] = useState();

    const handleshowmenu = () => {
        setShowmenu(!showmenu);
    }

    return (
        <header className='pt-4 bg-background/10 bg-gradient-to-tl from-[#183D3D] to-[#040D12] sticky top-0 backdrop-blur'>
            <div className='container mx-auto justify-between flex border-b-slate-200 items-center pb-6'>
                <Link to={"/"}><div className='text-lg font-bold text-[#fff]'>
                    mY Portfolio.
                </div></Link>

                <nav className='hidden md:flex space-x-4 font-bold font-sans'>
                    <NavLink className='text-white hover:border-b-2 border-[#5C8374] hover:duration-75 hover:text-[#93B1A6]' to={"/"}>Home</NavLink>
                    <NavLink className='text-white hover:border-b-2 border-[#5C8374] hover:duration-75 hover:text-[#93B1A6]' to={"/about"}>About</NavLink>
                    <NavLink className='text-white hover:border-b-2 border-[#5C8374] hover:duration-75 hover:text-[#93B1A6]' to={"/projects"}>Projects</NavLink>
                    <NavLink className='text-white hover:border-b-2 border-[#5C8374] hover:duration-75 hover:text-[#93B1A6]' to={"/contact"}>Contact</NavLink>
                </nav>
                <div onClick={handleshowmenu} className='contents'>
                    {showmenu ? <RxHamburgerMenu className='md:hidden' /> : <IoMdClose className='md:hidden'/>}
                </div>

            </div>
            
        </header>
    )
}

export default Navbar
