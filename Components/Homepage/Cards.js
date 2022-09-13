import Card from "../../Components/Homepage/Card";
import SpinnerComp from "../SpinnerComp";

const Handler = ({ data, visibility }) => {
  return (
    <>
      <div className={`grid lg:grid-cols-3 gap-[1rem] ${visibility}`}>
        {data?.map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
      {visibility === "invisible" && (
        <div className="flex justify-center">
          <div className="absolute top-[6%]">
            <SpinnerComp color={"#039C46"} size={50} />
          </div>
        </div>
      )}
    </>
  );
};
export default Handler;
