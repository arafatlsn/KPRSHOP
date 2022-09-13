import { useContext, useEffect } from "react";
import DashBoardMenu from "../../Components/DashboardMenu";
import TableComp from "../../Components/TableComp";
import { ProductContext } from "../_app";

const Handler = () => {
  const { setActiveMenu } = useContext(ProductContext);
  useEffect(() => {
    setActiveMenu("All Products")
  }, [])
  return (
    <>
      <div className="bg-[#F2F4F8] p-[1rem]">
        <div className="w-[55%] mx-auto flex justify-between gap-[1.5rem]">
          <div className="min-w-[30%] bg-[white] p-[.5rem] rounded-md">
            <DashBoardMenu />
          </div>
          <div className="bg-white min-w-[70%] h-[70vh] rounded-md p-[1rem]">
            <TableComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Handler;
