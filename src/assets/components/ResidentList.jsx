import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const { pages, residentsInpage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setcurrentPage(1);
  }, [residents]);
  return (
    <section className="bg-[url('./back2.PNG')] bg-cover">

      <section className="grid grid-cols-[repeat(auto-fit,_300px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
        {residentsInpage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>
      
      <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`bg-transparent border-2 border-[#8EFF8B] text-[#8EFF8B] font-bold p-1 rounded-full shadow-md shadow-[#8EFF8B] w-10 h-10 ${
                page === currentPage && "bg-green-500"
              } hover:bg-[#8EFF8B] hover:text-black`}
              onClick={() => setcurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

    </section>
  );
};
export default ResidentList;
