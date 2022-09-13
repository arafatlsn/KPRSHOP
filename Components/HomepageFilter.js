import { useContext, useState } from "react";
import { BsPhone, BsHeadphones, BsEarbuds, BsWatch } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { ProductContext } from "../pages/_app";

const Handler = () => {
  const { setFilterCategory } = useContext(ProductContext);
  const [activeFilter, setActiveFilter] = useState("");
  return (
    <>
      <div>
        <ul>
          <li
            onClick={() => {
              setFilterCategory("Phone");
              setActiveFilter("Phone");
            }}
            className={`text-center text-[#039C46] transition-all p-[.3rem] border border-[#039C46] mb-[.3rem] flex justify-between items-center cursor-pointer ${
              activeFilter === "Phone" && "bg-[#039C46] text-white"
            }`}
          >
            <span className="flex items-center gap-[.25rem] text-[1.2rem]">
              <BsPhone /> Phone
            </span>
            <span>
              <IoMdArrowDropright className="text-[1.5rem]" />
            </span>
          </li>
          <li
            onClick={() => {
              setFilterCategory("Headphone");
              setActiveFilter("Headphone");
            }}
            className={`text-center text-[#039C46] transition-all p-[.3rem] border border-[#039C46] mb-[.3rem] flex justify-between items-center cursor-pointer ${
              activeFilter === "Headphone" && "bg-[#039C46] text-white"
            }`}
          >
            <span className="flex items-center gap-[.25rem] text-[1.2rem]">
              <BsHeadphones /> Headphone
            </span>
            <span>
              <IoMdArrowDropright className="text-[1.5rem]" />
            </span>
          </li>
          <li
            onClick={() => {
              setFilterCategory("Airbuds");
              setActiveFilter("Airbuds");
            }}
            className={`text-center text-[#039C46] transition-all p-[.3rem] border border-[#039C46] mb-[.3rem] flex justify-between items-center cursor-pointer ${
              activeFilter === "Airbuds" && "bg-[#039C46] text-white"
            }`}
          >
            <span className="flex items-center gap-[.25rem] text-[1.2rem]">
              <BsEarbuds /> Airbuds
            </span>
            <span>
              <IoMdArrowDropright className="text-[1.5rem]" />
            </span>
          </li>
          <li
            onClick={() => {
              setFilterCategory("Watch");
              setActiveFilter("Watch");
            }}
            className={`text-center text-[#039C46] transition-all p-[.3rem] border border-[#039C46] mb-[.3rem] flex justify-between items-center cursor-pointer ${
              activeFilter === "Watch" && "bg-[#039C46] text-white"
            }`}
          >
            <span className="flex items-center gap-[.25rem] text-[1.2rem]">
              <BsWatch /> Watch
            </span>
            <span>
              <IoMdArrowDropright className="text-[1.5rem]" />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Handler;
