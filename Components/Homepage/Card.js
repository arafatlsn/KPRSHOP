import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { ProductContext } from "../../pages/_app";

const Handler = ({ data }) => {
  const { cart, setCart, setVisibleCart } = useContext(ProductContext);
  const { title, price, image } = data;

  const addCartHandler = (product) => {
    const findExistingProduct = cart.find((el) => el._id === product._id);
    // console.log(product);
    if (!findExistingProduct) {
      product["cartQuantity"] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setVisibleCart(true);
      setTimeout(() => {
        setVisibleCart(false);
      }, 3000);
    } else {
      const newCart = [];
      cart.map((el) => {
        if (el._id === findExistingProduct._id) {
          product["cartQuantity"] = findExistingProduct.cartQuantity + 1;
          newCart.push(product);
        } else {
          newCart.push(el);
        }
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setVisibleCart(true);
      setTimeout(() => {
        setVisibleCart(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="w-[232px] overflow-hidden border border-[#039C46] rounded-[.3rem]">
        <div className="w-[232px] flex justify-center overflow-hidden h-[275px]">
          <img
            src={image}
            className="w-[232px] h-[275px] object-contain object-center  p-[.5rem]"
            alt=""
          />
        </div>
        <div className="p-[1rem]">
          <span className="truncate text-[#039C46] block">{title}</span>
          <span className="truncate text-[#039C46] text-center block">
            ${price}
          </span>
          <div className="flex justify-center mt-[.5rem]">
            <button
              onClick={() => {
                addCartHandler(data);
              }}
              className="border border-[#039C46] px-[1.3rem] py-[.3rem] text-[#039C46] hover:bg-[#039C46] flex items-center gap-[.3rem] hover:text-white transition-all rounded-[.25rem]"
            >
              {" "}
              <IoMdCart className="text-[1.2rem]" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Handler;
