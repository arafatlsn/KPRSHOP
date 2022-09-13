import Link from "next/link";
import { useContext, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { ProductContext } from "../pages/_app";

const Handler = () => {
  const {activeMenu} = useContext(ProductContext);
  return (
    <>
      <div>
        <ul>
          <Link href={"/dashboard/additem"}>
            <li
              className={`text-center text-[#039C46] transition-all flex items-center justify-center gap-[.3rem] p-[.3rem] border border-[#039C46] mb-[.3rem] cursor-pointer  ${
                activeMenu === "Add New Item" && "bg-[#039C46] text-white"
              }`}
            >
              <BsPlus className="text-[1.3rem]" />{" "}
              <span className="">Add New Item</span>
            </li>
          </Link>
          <Link href={"/dashboard/allproducts"}>
            <li
              className={`text-center text-[#039C46] transition-all flex items-center justify-center gap-[.3rem] p-[.3rem] border border-[#039C46] cursor-pointer ${
                activeMenu === "All Products" && "bg-[#039C46] text-white"
              }`}
            >
              <BsPlus className="text-[1.3rem]" />{" "}
              <span className="">All Products</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Handler;
