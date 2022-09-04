import { BiSearchAlt2 } from "react-icons/bi";
import { MdHistory, MdOutlineSell } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { BsColumnsGap } from "react-icons/bs";
import Link from "next/link";
// import { useRouter } from 'next/router'

const HeaderComp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
  };
  return (
    <div className="shadow-md mb-[.2rem]">
      <div className="w-[55%] py-[.3rem] flex items-center justify-between mx-auto">
        <div className="flex justify-between items-center w-[55%]">
          <h1 className="text-[#039C46] text-[1.7rem] font-semibold uppercase">
            KPR Shop
          </h1>
          <div>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                name="searchText"
                className="w-[350px] border-[.125rem] border-[#039C46] text-[#039C46] rounded-l-md text-[1.1rem] px-[.3rem] py-[.2rem] focus:outline-none font-[600]"
                placeholder="Search"
              />
              <button className="bg-[#039C46] px-[.1rem] rounded-r-md">
                <BiSearchAlt2 className="text-[2.3rem] text-[white] p-[.25rem]" />
              </button>
            </form>
          </div>
        </div>
        <div>
          <ul className="flex gap-[1rem]">
            <Link href={"/dashboard/additem"}><li className="text-[#039C46] flex items-center">
              {" "}
              <BsColumnsGap className="text-[1.4rem] mr-[.2rem]" />{" "}
              <span className="font-[500]">Dashboard</span>
            </li></Link>
            {/* <li className="text-[#039C46] flex items-center">
              {" "}
              <MdHistory className="text-[1.4rem] mr-[.2rem]" />{" "}
              <span className="font-[500]">History</span>
            </li> */}
            <li className="text-[#039C46] flex items-center">
              {" "}
              <AiOutlineUserAdd className="text-[1.4rem] mr-[.2rem]" />{" "}
              <span className="font-[500]">Login</span>
            </li>
            <li>
              <div className="bg-[#039C46] rounded-[.2rem] p-[.5rem] flex items-center gap-[.5rem]">
                <span className="text-white font-[600] uppercase">
                  4 items - 14700 BDT
                </span>{" "}
                <IoMdCart className="text-white text-[1.4rem] mr-[.2rem] font-bold" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
