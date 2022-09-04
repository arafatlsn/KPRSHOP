import DashboardMenu from "../../Components/DashboardMenu";
import { BsPlusSquareDotted } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import defaultImage from "../../public/placeholder.jpg";
import SpinnerComp from "../../Components/SpinnerComp";
import axios from "axios";

const Handler = () => {
  const [uploadImageUrl, setUploadImageUrl] = useState("");
  const [isLoading, setIsloadin] = useState(false);

  // upload image imagebb 
  const uploadImage = async (e) => {
    setIsloadin(true);
    const imagePath = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imagePath);
    const url = `https://api.imgbb.com/1/upload?key=565f41ae1e5b8cd4d1430014c0206ed2`;
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    if (result.success) {
      setUploadImageUrl(result.data.url);
      setIsloadin(false);
    }
  };

  // save new product 
  const addProduct = async(e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const image = uploadImageUrl

    const itemObj = { title, price, quantity, description, image }
    const { data } = await axios.post("http://localhost:3000/api/addproduct", itemObj)
    console.log(data)

  }

  return (
    <div className="bg-[#F2F4F8] p-[1rem]">
      <div className="w-[55%] mx-auto flex justify-between gap-[1.5rem]">
        {/* add items left side  */}
        <div className="w-[30%] bg-[white] p-[.5rem] rounded-md">
          <DashboardMenu />
        </div>
        {/* add item right side  */}
        <div className="bg-white w-[70%] h-[70vh] rounded-md p-[1rem]">
          <div>
            <form onSubmit={addProduct}>
              <div className="mb-[1rem]">
                <label
                  htmlFor="title"
                  className="text-[#039C46] text-[1.2rem] mr-[1rem]"
                >
                  Title
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="w-[60%] rounded-md py-[.1rem] px-[.3rem] border border-[#039C46] text-[#039C46] focus:outline-none"
                  name="title"
                  id="title"
                  required
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="price"
                  className="text-[#039C46] text-[1.2rem] mr-[1rem]"
                >
                  Price
                </label>{" "}
                <br />
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-[60%] rounded-md py-[.1rem] px-[.3rem] border border-[#039C46] text-[#039C46] focus:outline-none"
                  required
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="quantity"
                  className="text-[#039C46] text-[1.2rem] mr-[1rem]"
                >
                  Quantiy
                </label>{" "}
                <br />
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="w-[60%] rounded-md py-[.1rem] px-[.3rem] border border-[#039C46] text-[#039C46] focus:outline-none"
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="description"
                  className="text-[#039C46] text-[1.2rem] mr-[1rem]"
                >
                  Description
                </label>{" "}
                <br />
                <textarea name="description" id="description" className="w-[60%] max-h-[13vh] rounded-md py-[.1rem] px-[.3rem] border border-[#039C46] text-[#039C46] focus:outline-none" />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="text-[#039C46] text-[1.2rem] mr-[1rem]"
                >
                  Image
                </label>{" "}
                <br />
                {!uploadImageUrl ? (
                  <div>
                    <label
                      htmlFor="imageUpload"
                      className="w-min rounded-md uppercase cursor-pointer font-semibold flex items-center gap-[.3rem]"
                    >
                      <input
                        onChange={uploadImage}
                        type="file"
                        className="hidden"
                        name="imageUpload"
                        id="imageUpload"
                      />
                      <div className="w-[120px] h-[120px] relative">
                        <Image
                          src={defaultImage}
                          className="w-[120px] h-[120px] object-contain p-0 m-[-2rem]"
                          alt="default-image"
                        />
                        <div className="w-[100%] absolute z-[500] top-[40%] flex justify-center">
                          <BsPlusSquareDotted className="text-[1.5rem] text-[#039C46]" />
                        </div>
                        {isLoading && <SpinnerComp />}
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="w-[120px] h-[120px] relative">
                    <img
                      src={uploadImageUrl}
                      className="w-[120px] h-[120px] object-contain p-0 m-0"
                      alt="image"
                    />{" "}
                    <MdOutlineCancel
                      onClick={() => setUploadImageUrl("")}
                      className="text-[1.1rem] text-red-700 bg-red-200 rounded-[50%] absolute top-1 right-1 cursor-pointer"
                    />{" "}
                  </div>
                )}
              </div>
              <div className="mt-[2rem]">
                <button type="submit" className="bg-[#039C46] text-white px-[2.5rem] py-[.6rem] rounded-[.3rem] text-[1.1rem] hover:bg-[#008238] transition-all">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
