import React from 'react'
import { CiAt } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Submitted");
  }


  return (
    <section className="text-gray-600 body-font bg-[#040D12]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h1>
      <p>Have a question?</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <form className="flex flex-wrap -m-2" onSubmit={sendEmail}>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" placeholder='name' className="w-full bg-white rounded border border-gray-300 focus:border-[#183D3D] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" placeholder='email' className="w-full bg-white rounded border border-gray-300 focus:border-[#183D3D] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" placeholder='message' className="w-full bg-white rounded border border-gray-300 focus:border-[#183D3D] focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-[#183D3D] border-0 py-2 px-8 focus:outline-none hover:bg-[#5C8374] rounded-full text-lg">Submit</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200">
          <p className='text-white font-bold underline'>Contact Info</p><br/>
        <CiAt/>
          <a className="text-[#93B1A6]">arslanmushtaq588@gmail.com</a>
          <IoCallOutline/>
          <a className="text-[#93B1A6]">+92 123 4567890</a>
          <FiMapPin/>
          <a className="text-[#93B1A6]">Pakistan</a>
        </div>
      </form>
    </div>
  </div>
</section>
  )
}

export default Contact
