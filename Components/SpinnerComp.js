import { PuffLoader } from "react-spinners";

const SpinnerComp = ({ color, size }) => {
  return (
    <div className="flex flex-col items-center w-fit h-fit mx-auto animate__animated animate__flipInX">
      <PuffLoader size={size} color={color} />
    </div>
  );
};

export default SpinnerComp;
