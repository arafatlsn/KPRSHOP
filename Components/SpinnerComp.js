import { PuffLoader } from "react-spinners";

const SpinnerComp = () => {
  return (
    <div className="absolute top-[35%] w-[100%] h-[100%] flex justify-center">
      <div className="flex flex-col items-center w-fit h-fit animate__animated animate__flipInX">
        <PuffLoader size={35} color="#039C46" />
      </div>
    </div>
  );
};

export default SpinnerComp;
