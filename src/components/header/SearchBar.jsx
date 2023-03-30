import { FiSearch } from "react-icons/fi";

export default function SearchBar({ handleClose }) {
  return (
    <div className="py-[10px] px-[20px] block mt-[100px] mx-auto mb-0 text-[18px] w-screen  h-screen top-0 bottom-0 left-0 right-0 fixed">
      <div
        onClick={handleClose}
        className="w-screen bg-[rgba(49,49,49,0.8)] h-screen top-0 bottom-0 left-0 right-0 fixed"
      ></div>
      <div
        className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             leading-1.4 bg-gray-100 py-14 px-28 rounded-md max-w-600 min-w-300"
      >
        <div className="flex justify-center items-center h-full">
          <input className="mr-2" />
          <FiSearch />
        </div>
      </div>
    </div>
   
  );
}

