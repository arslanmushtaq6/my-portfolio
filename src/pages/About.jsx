import React from 'react'
import resume from '../assets/Arslan_Resume_Reactjs.pdf'
import { MdOutlineFileDownload } from "react-icons/md";


const About = () => {
  return (
    <section className="text-gray-g00 body-font body-font bg-gradient-to-tl from-[#040D12] to-[#040D12]">
      <div className="container mx-auto flex px-5 py-48 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">ABOUT ME</h1>
          <p className="mb-8 leading-relaxed text-white">I'm a passionate Web Developer with experience in creating dynamic and interactive web applications. My work revolves around blending modern technologies with innovative solutions to build user-centric products.</p>
          <div className="flex justify-center">
            <a href={resume} download="resume"><button className="inline-flex text-white outline-4 hover:bg-[#5C8374] hover:text-[#040D12] py-2 px-6 focus:outline-slate-800  rounded-full text-lg items-center border-2 border-[#5C8374]">Download CV <MdOutlineFileDownload /></button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
