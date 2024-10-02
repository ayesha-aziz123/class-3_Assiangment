import Link from "next/link";
import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#F4F4F5]">
      <div className="flex justify-evenly h-[25rem]  ">
        <ul className="mt-[70px] ">
          <p>Core Courses</p>
          <a className="block">Programming Fundamentals</a>
          <a className="block">Web2 Using NextJS</a>
          <a className="block">Earn as You Learn</a>
        </ul>
        <ul className="mt-[70px] ">
          <p>Advanced Courses</p>
          <a className="block">Web 3 and Metaverse</a>
          <a className="block">Cloud-Native Computing</a>
          <a className="block">
            Artificial Intelligence (AI) and Deep Learning
          </a>
          <a className="block">Ambient Computing and IoT</a>
          <a className="block">Genomics and Bioinformatics</a>
          <a className="block">Network Programmability and Automation</a>
        </ul>

        <ul className="mt-[70px] ">
          <p>Social Links</p>
          <ul className="flex gap-4">
            <Link href={"/"} className="a">
              <FaFacebook className="icon1 text-blue-700 bg-white  rounded-full inline-flex text-[28px] " />
            </Link>
            <Link href={"/"}>
              <FaYoutube className=" icon2  text-white p-1 bg-red-600 rounded-full inline-flex  text-[28px]  " />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="icon3  text-white bg-sky-500 p-1 rounded-full inline-flex   text-[28px]  " />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="icon4  text-white p-1 bg-pink-500 rounded-full inline-flex  text-[28px] " />
            </Link>
            <Link href={"/"}>
              <FaTiktok className="icon5  text-white rounded-full bg-black inline-flex p-1 text-[28px]  " />
            </Link>
          </ul>

          <div className="mt-5">
            <a>
              <CiMail className="inline-flex text-2xl" /> education@governorsindh.com
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}
