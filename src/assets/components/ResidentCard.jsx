import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  const characterStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  }
  
  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-2 border-[#8EFF8B]">
      <header className="relative">
        <img src={resident?.image} alt="" />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-1 rounded-md flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="font-mono border-t-2 border-t-[#8EFF8B] p-4">
        <h4 className="text-[#FBFBFB] text-[22px] font-bold"> {resident?.name}</h4>
        
        <div className="w-full h-[1px] 
       bg-gradient-to-r from-teal-900 via-red-700 to-teal-500 mb-3"></div>

        
        <ul className=" text-xs p-1 ">
          <li className="mb-2 ">
            <span className="text-[#938686] mr-8">Species</span> <span>{resident?.species}</span>
          </li>
          <li className="mb-2 bg-slate-200/30">
            <span className="text-[#938686] mr-10">Origin</span> <span>{resident?.origin.name}</span>
          </li>
          <li className="mb-0 w-[120px]">
            <span className="text-[#938686]">Times appear</span> <span>{resident?.episode.length}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;
