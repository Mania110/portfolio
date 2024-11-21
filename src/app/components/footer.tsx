import Link from "next/link";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



//footer 
const Footer=()=>{
  return (
    <footer className="bg-[#121212] p-6">
      <ul className="flex justify-center gap-x-4 text-white font-sans font-semibold">
        <li>
          <Link
            className="hover:text-blue-300 text-3xl"
            href="https://www.instagram.com/maniaali00/profilecard/?igsh=Z29md3pwazl3MzU5"
            aria-label="Instagram"
          >
            <FaInstagram />

          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-300 text-3xl"
            href="https://www.linkedin.com/in/mania-ali-469ba32b8/"
            aria-label="LinkedIn"
          >
            <FaLinkedin />

          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-300 text-3xl"
            href="https://www.facebook.com/profile.php?id=100015190324015"
            aria-label="Facebook"
          >
                        <FaSquareFacebook />

          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-300 text-3xl"
            href="https://github.com/Mania110"
            aria-label="GitHub"
          >
            <FaGithub />

          </Link>
        </li>
      </ul>
      {/* Blog Section */}
      <div className="mt-6 text-center text-white-500">
        <p className="font-sans font-semibold">
          Thank you for visiting my website! Im passionate about creating
          dynamic, user-friendly websites and am always eager to take on new
          challenges. Whether youre looking to collaborate or have a project in
          mind, feel free to reach out. Let’s create something amazing together!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
