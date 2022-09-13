import { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { ProductContext } from "../../pages/_app";

const Handler = ({ product }) => {
  const { title, price, image, cartQuantity } = product;
  const { cart, setCart } = useContext(ProductContext);

  const removerFromCart = id => {
    const filterCart = cart.filter(el => el._id !== id);
    setCart(filterCart)
    localStorage.setItem("cart", JSON.stringify(filterCart))
  }

  return (
    <div className="flex justify-center items-center border-b border-gray-400 px-[.3rem] py-[.5rem]">
      <div className="w-fit">
        <img src={image} alt="" className="w-[60px] h-[60px] object-contain" />
      </div>
      <div className="w-[80%] grid grid-cols-12 items-center gap-[1rem]">
        <p className="h-[6ex] col-start-1 col-end-6 leading-[2ex] overflow-hidden box-content">{title}</p>
        <p className="col-start-6 col-end-7">{cartQuantity}x</p>
        <p className="whitespace-nowrap col-start-7 col-end-11">{price * cartQuantity} BDT</p>
        <p onClick={() => removerFromCart(product._id)} className="col-start-11 col-end-13 cursor-pointer">
          <FaRegTimesCircle className="text-[1.3rem] rounded-[50%] text-red-700" />
        </p>
      </div>
    </div>
  );
};

export default Handler;
