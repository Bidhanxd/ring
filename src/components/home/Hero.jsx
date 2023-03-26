import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="relative top-[80px] h-[80vh] w-full -z-[1]">
        <div className="flex justify-around w-full h-[60%] flex-wrap">
          <Image
            src="/assets/rings-home.jpg"
            alt="rings home"
            fill
            priority
            className="bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </>
  );
}
