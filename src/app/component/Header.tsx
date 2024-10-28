import Image from "next/image";
import React from "react";
import logo1 from "../../../public/image/img2.png";

export default function Header() {
  return (
    <div>
      <header className="body-font bg-black text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo1} alt="Image Logo" className="w-[50] h-[50]" />
            <span className="ml-3 text-xl text-white hover:text-orange-700">
              Malik Hunain
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-4 font-bold">
            <a className="mr-5 hover:text-orange-700 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-orange-700 cursor-pointer">About</a>
            <a className="mr-5 hover:text-orange-700 cursor-pointer">Contact</a>
            <a className="mr-5 hover:text-orange-700 cursor-pointer">
              Projects
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
