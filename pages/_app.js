import { createContext, useEffect, useState } from "react";
import HeaderComp from "../Components/HeaderComp";
import "../styles/globals.css";

export const ProductContext = createContext();
function MyApp({ Component, pageProps }) {
  const [productsLoading, setProductsLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [visibleCart, setVisibleCart] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart);
  }, []);
  return (
    <>
      <ProductContext.Provider
        value={{
          productsLoading,
          setProductsLoading,
          filterCategory,
          setFilterCategory,
          cart,
          setCart,
          visibleCart,
          setVisibleCart,
          activeMenu,
          setActiveMenu,
        }}
      >
        <HeaderComp />
        <Component {...pageProps} />
      </ProductContext.Provider>
    </>
  );
}

export default MyApp;
