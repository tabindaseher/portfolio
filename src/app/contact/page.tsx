import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-white">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-black">
      Feel free to get in touch with any questions or inquiries
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-purple-900 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full  rounded border border-purple-900 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border border-purple-900 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <Link href="/"><button className="flex mx-auto text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-900 hover:font-bold rounded text-lg">
           Submit
          </button></Link>
        </div>
       
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact