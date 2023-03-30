import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="relative top-[80px] h-[80vh]  w-full -z-[1]">
        <div className="">
          <div className="flex justify-center flex-col items-center h-[65vh] pt-16">
            <h1 className="font-chewy text-[27px] md:text-[55px] lg:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
              Top E-commerce Platform In Nepal!
            </h1>
            <h2 className="font-andika text-[25px] md:text-[45px] ">
              We ship products in 0 delay!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
