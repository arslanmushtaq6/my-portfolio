import React from 'react'

const Projects = () => {
  return (
    <section className="text-gray-400 body-font bg-[#040D12]">
  <div className="container px-5 py-28 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-white mb-3">Todo List using ReactJs</h1>
            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime laudantium atque!</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-[#93B1A6] cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Projects
