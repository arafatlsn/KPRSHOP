import { BsPlus } from 'react-icons/bs'

const Handler = () => {
  return (
    <>
      <div>
        <ul>
          <li className="text-center text-[#039C46] transition-all flex items-center justify-center gap-[.3rem] p-[.3rem] border border-[#039C46] mb-[.3rem]">
            <BsPlus className='text-[1.3rem]'/> <span className=''>Add New Item</span>
          </li>
          <li className="text-center text-[#039C46] transition-all flex items-center justify-center gap-[.3rem] p-[.3rem] border border-[#039C46]">
            <BsPlus className='text-[1.3rem]'/> <span className=''>Add New Item</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Handler;
