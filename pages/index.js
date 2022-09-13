import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomepageFilter from "../Components/HomepageFilter";
import Cards from "../Components/Homepage/Cards";
import Footer from "../Components/Footer";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./_app";

export default function Home({ data }) {
  const {
    productsLoading,
    setProductsLoading,
    filterCategory,
    setFilterCategory,
  } = useContext(ProductContext);
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProductsLoading(true);
    const filterProducts = products.filter(
      (product) =>
        product.category.toLowerCase() === filterCategory.toLowerCase()
    );
    setFilteredProducts(filterProducts);
  }, [filterCategory]);
  setProductsLoading(false);

  let items = products;

  if (filterCategory) {
    items = filteredProducts;
  }

  return (
    <div className={styles.container}>
      <div className="bg-[#F2F4F8] p-[1rem]">
        <div className="w-[55%] mx-auto">
          {/* left side  */}
          <div className="flex gap-[1.5rem]">
            <div className="h-fit w-[25%] bg-[white] p-[.5rem] rounded-md">
              <HomepageFilter />
            </div>
            <div
              className="bg-white w-[75%] min-h-[90vh] rounded-md p-[1rem] relative
            "
            >
              <Cards
                data={items}
                visibility={`${productsLoading ? "invisible" : "visible"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/addproduct");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
