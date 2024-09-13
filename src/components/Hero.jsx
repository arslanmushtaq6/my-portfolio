import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { MdKeyboardTab } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { Link } from 'react-router-dom';
import resume from '../assets/Arslan_Resume_Reactjs.pdf'
import myself from '../assets/me.jpeg'
import { TypeAnimation } from 'react-type-animation';
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';
// sm:text-4xl

const Hero = () => {

  console.log(resume);

  return (
    <motion.section className="text-gray-600 body-font bg-gradient-to-tl from-[#040D12] to-[#040D12]">
      <div className="container mx-auto flex px-0 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1 className="title-font sm:text-4xl text-3xl mb-2 font-bold text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: easeIn, delay: 0.5 }}
          >I am <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#5C8374] relative inline-block"><span className='relative text-white'>Arslan</span></span></motion.h1>
          <motion.h1 className="title-font text-6xl mb-4 font-bold text-white"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: easeIn, delay: 0.5 }}
          >Web Developer</motion.h1>
          <motion.p className="mb-8 leading-relaxed text-white text-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: easeOut, delay: 0.5 }}
          >With a keen eye for design and a love for coding, I specialize in turning innovative ideas into responsive, interactive websites. Based in Islamabad, Pakistan.</motion.p>
          <motion.div className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}>
            <Link to={"/projects"}><button className="inline-flex text-white outline-4 hover:bg-[#5C8374] hover:text-[#040D12] py-2 px-6 focus:outline-slate-800  rounded-full text-lg items-center border-2 border-[#5C8374]">Explore Projects</button></Link>
            {/* <Link to={"/projects"}><button className="inline-flex text-[#040D12] bg-white py-2 px-6 focus:outline-slate-800 rounded-full text-lg items-center justify-center">Explore Projects</button></Link> */}
          </motion.div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.img className="object-center origin-top-left scale-90 border-4 border-[#183D3D] hover:skew-y-0" alt="hero" src={myself}
            animate={{
              borderRadius: ["50%", "10%", "50%", "50%"]
            }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
