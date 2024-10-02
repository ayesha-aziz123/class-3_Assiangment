import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
   <header className=" w-full bg-gray-700" >
    <div className="fixed top-0  w-full flex justify-evenly items-center bg-[#044E83] text-white pt-5 pb-5" >
      <div className="absolute left-20 top-6  ">
        <Image src={require("../../../public/picture/logo.png")} alt={"logo"} height={200} width={200} className="object-contain h-24 w-24" >
        </Image>
      </div>
        
        <h1 className="font-bold text-xl ml-16 text-[#B9D8F3]">Tuition Free Education Program on Latest Technologies</h1>
        <ul className="flex gap-9">
          <Link href={""}>Home</Link>
          <Link href={""}>Apply</Link>
          <Link href={""}>Jobs</Link>
          <Link href={""}>Result</Link>
          <Link href={""}>Courses</Link>
          </ul>
      </div>

   </header>
      
  );
};