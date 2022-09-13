import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { BsColumnsGap, BsEmojiFrown, BsShop } from "react-icons/bs";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../pages/_app";
import Cart from "../Components/Homepage/Cart";
import styles from "../styles/HeaderComp.module.css";
// import { useRouter } from 'next/router'

const HeaderComp = () => {
  const { cart, visibleCart, setVisibleCart } = useContext(ProductContext);
  const [textColor, setTextColor] = useState("#039C46");
  const [bgColor, setBgColor] = useState("white");
  const [colorNav, setColorNav] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
  };

  let carTotal = 0;
  if (cart?.length) {
    cart.map((el) => {
      carTotal = carTotal + el.price * el.cartQuantity;
    });
  }

  // nav color change code
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbarContainer = document.querySelector("#navbarContainer");
      if (window.scrollY > 50) {
        setTextColor("white");
        setBgColor("#039C46");
        setColorNav(true)
      } else {
        setTextColor("#039C46");
        setBgColor("white");
        setColorNav(false)
      }
    });
  }, []);

  return (
    <div
      id="navbarContainer"
      className={`sticky top-0 z-[500] bg-[${bgColor}] shadow-md mb-[.2rem] transition-all`}
    >
      <div className="w-[55%] py-[.3rem] flex items-center justify-between mx-auto">
        <div className="flex justify-between items-center w-[57%]">
          <Link href={"/"}>
            <h1
              className={`text-[1.7rem] font-semibold uppercase cursor-pointer flex gap-[.5rem]  ${!colorNav ? "text-[#039C46]" : "text-white"}`}
            >
              <BsShop className="text-[2rem]" /> KPR Shop
            </h1>
          </Link>
          <div>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                name="searchText"
                className={`w-[350px] border-[.125rem] text-[#039C46] rounded-l-md text-[1.1rem] px-[.3rem] py-[.28rem] focus:border-[#039C46] focus:border-[.04rem] font-[600] ${!colorNav ? "border-[#039C46]" : "border-white"}`}
                placeholder="Search"
              />
              <button className={`bg-[${textColor}] ${colorNav ? "text-[#039C46]" : "text-white"} px-[.1rem] rounded-r-md`}>
                <BiSearchAlt2
                  className={`text-[2.3rem] p-[.25rem]`}
                />
              </button>
            </form>
          </div>
        </div>
        <div>
          <ul className="flex gap-[1rem]">
            <Link href={"/dashboard/additem"}>
              <li
                className={`flex items-center cursor-pointer ${!colorNav ? "text-[#039C46]" : "text-white"}`}
              >
                {" "}
                <BsColumnsGap className="text-[1.4rem] mr-[.2rem]" />{" "}
                <span className="font-[500]">Dashboard</span>
              </li>
            </Link>
            <li
              className={`flex items-center cursor-pointer ${!colorNav ? "text-[#039C46]" : "text-white"}`}
            >
              {" "}
              <AiOutlineUserAdd className="text-[1.4rem] mr-[.2rem]" />{" "}
              <span className="font-[500]">Login</span>
            </li>
            <li id={styles.cartButton}>
              <div
                className={`bg-[${textColor}] rounded-[.2rem] p-[.5rem] flex items-center gap-[.5rem]  ${colorNav ? "text-[#039C46]" : "text-white"}`}
              >
                <span className={`text-[${bgColor}] font-[600] uppercase`}>
                  {cart?.length} items - {carTotal} BDT
                </span>{" "}
                <IoMdCart
                  className={`text-[${bgColor}] text-[1.4rem] mr-[.2rem] font-bold`}
                />
              </div>
              {/* cart ui  */}
              <div id={styles.cartUi} className="flex justify-end">
                {cart?.length ? (
                  <div
                    className={`absolute w-[18vw] h-[40vh] mt-[1rem] z-[100] bg-[#E2D0C0] shadow-lg shadow-gray-500 ${
                      visibleCart && "visible"
                    }`}
                  >
                    <div className="h-[67%] overflow-hidden overflow-y-scroll border-b border-gray-700">
                      {cart.map((product) => (
                        <Cart key={product._id} product={product} />
                      ))}
                    </div>
                    <div>
                      <p className="text-center text-gray-800 text-[1.3rem] ">
                        SubTotal:{" "}
                        <span className="font-semibold">{carTotal} </span>BDT
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`absolute w-[18vw] h-[40vh] mt-[1rem] z-[100] bg-[#E2D0C0] shadow-lg shadow-gray-500`}
                  >
                    <div className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-[.5rem]">
                      <p>
                        <BsEmojiFrown className="text-[2.5rem]" />
                      </p>
                      <p>Your Cart is Empty</p>
                    </div>
                  </div>
                )}
                <div
                  className={`w-[30px] h-[30px] absolute r z-[50] mt-[.6rem] mr-[5rem] rotate-45 bg-[#E2D0C0] ${
                    visibleCart && "visible"
                  }`}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
