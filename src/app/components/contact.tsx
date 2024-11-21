import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-7xl font-bold text-pink-500">Contact</h1>
        <h2 className="mt-4 text-2xl text-pink-400">Lets Connect!</h2>
        
        {/* Flex container for form and image */}
        <div className="flex flex-col md:flex-row items-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Contact Form on the left */}
          <div className="flex-1  p-8 shadow-lg rounded-lg">
            <form action="#" method="POST">
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    className="w-full p-2 border bg-black border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-1/2 px-2">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    className="w-full p-2 border bg-black border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full p-2 border bg-black border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-2 border bg-black border-gray-300 rounded-md h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-400 text-white p-2 rounded-md hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1  bg-[#181818] w-[250px] h-[250px] overflow-hidden">
            <Image
              src="/img4.jpg"
              alt="contact"
              width={500}
              height={500}
              className="w-full h-full object-cover bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
