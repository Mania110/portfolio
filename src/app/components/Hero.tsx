 import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm-text-left">
          <h1 className="text-pink-600 mb-4 lg:text-6xl  font-extrabold">
            Hello,I  Mania
          </h1>
          <p className=" text-[#ADB7BE]  text-bse sm:text-lg lg:text-xl ">
            I a full stack developer focused on creating modern, dynamic web
            applications
          </p>
          <a href="./cv.pdf">
            <button className="px-6 py-3 w-full  sm:w-fit  rounded-full mr-4 bg-pink-300 hover:bg-slate-800 text-black broder border-white mt-3" >Download cv
            </button>
          </a>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] overflow-hidden">
            <Image
              src="/img1.jpg"
              alt="Hero image"
              width={250}
              height={250}
              className="w-full h-full object-cover bg-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
