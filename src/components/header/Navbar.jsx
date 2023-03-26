import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BsCartDash } from "react-icons/bs";

export default function Hero() {
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navShadow, setNavShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header>
      <nav>
        <div
          style={{ background: `${navBg}` }}
          className={
            navShadow
              ? "fixed w-full h-20 shadow-xl z-[100] px-2"
              : "fixed w-full h-20  z-[100]  px-2"
          }
        >
          <div className="flex justify-between items-center  w-full h-[80px] ">
            <div className="w-[100px] h-[100px] ">
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  alt="ring logo"
                  width={500}
                  height={500}
                  priority
                />
              </Link>
            </div>
            <div className="flex ">
              <div className="">
                <ul className="hidden md:flex justify-center font-bold">
                  <li className="mx-4">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mx-4">
                    <Link href="/products">Products</Link>
                  </li>
                  <li className=" mx-4">
                    <Link href="/#latest_products">What&apos;s New</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-6 md:mx-0 flex">
              <FiSearch className="cursor-pointer mx-6 " size={20} />
              <BsCartDash className="cursor-pointer mx-2" size={20} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
