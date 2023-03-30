import Image from "next/image";

export default function ShopImage({ src, alt, name }) {
  return (
    <div className="font-andika shadow-xl shadow-slate-500 h-[370px]  w-full sm:w-[50vw] md:w-full lg:w-[300px]  flex flex-col justify-evenly">
      <div className="w-full h-[72%] bg-slate-200 flex justify-center items-stretch">
        <Image src={src} alt={alt} width={500} height={500} className="" />
      </div>
      <div className="text-center capitalize">
        <h1 className="font-bold text-3xl">{name}</h1>
      </div>
    </div>
  );
}
