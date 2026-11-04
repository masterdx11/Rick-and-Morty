import { useEffect, useState } from "react";
import axios from "axios";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const CHARACTER_URL = "https://rickandmortyapi.com/api/character";

const RETRY_DELAY_MS = 2000;

const idFromUrl = (url) => url.split("/").pop();

// La API limita las peticiones seguidas: se reintenta una vez antes de avisar.
const fetchCharacters = (ids) =>
  axios.get(`${CHARACTER_URL}/${ids}`).catch(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(() => axios.get(`${CHARACTER_URL}/${ids}`).then(resolve, reject), RETRY_DELAY_MS);
      })
  );

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  const { pages, residentsInpage } = paginationLogic(currentPage, residents);
  const ids = residentsInpage.map(idFromUrl).join(",");

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  // Una sola petición por página, para no gastar el límite de la API.
  useEffect(() => {
    if (!ids) {
      setCharacters([]);
      setStatus("ready");
      return undefined;
    }
    let ignore = false;
    setStatus("loading");
    fetchCharacters(ids)
      .then(({ data }) => {
        if (ignore) return;
        // Con un solo id, la API responde un objeto en vez de una lista.
        setCharacters([].concat(data));
        setStatus("ready");
      })
      .catch(() => {
        if (!ignore) setStatus("error");
      });
    return () => {
      ignore = true;
    };
  }, [ids, attempt]);

  return (
    <section className="bg-[url('/back2.PNG')] bg-cover">
      {status === "error" ? (
        <div role="alert" className="py-16 text-center">
          <p className="text-lg text-[#8EFF8B]">Could not load the residents.</p>
          <button
            type="button"
            onClick={() => setAttempt(attempt + 1)}
            className="mt-4 border-2 border-[#8EFF8B] px-4 py-2 font-bold text-[#8EFF8B] hover:bg-[#8EFF8B] hover:text-black"
          >
            Try again
          </button>
        </div>
      ) : status === "ready" && characters.length === 0 ? (
        <p className="py-16 text-center text-lg text-[#8EFF8B]">Nobody lives here.</p>
      ) : (
        <section
          aria-busy={status === "loading"}
          className="grid grid-cols-[repeat(auto-fit,_minmax(0,_300px))] justify-center gap-6 max-w-[1000px] mx-auto py-10"
        >
          {status === "loading"
            ? residentsInpage.map((url) => (
                <div key={url} className="aspect-[3/4] animate-pulse border-2 border-[#8EFF8B]/40 bg-zinc-900"></div>
              ))
            : characters.map((resident) => <ResidentCard key={resident.id} resident={resident} />)}
        </section>
      )}

      {pages.length > 1 && (
        <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10">
          {pages.map((page) => (
            <li key={page}>
              <button
                className={`border-2 border-[#8EFF8B] font-bold p-1 rounded-full shadow-md shadow-[#8EFF8B] w-10 h-10 ${
                  page === currentPage ? "bg-[#8EFF8B] text-black" : "bg-transparent text-[#8EFF8B]"
                } hover:bg-[#8EFF8B] hover:text-black`}
                aria-current={page === currentPage ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ResidentList;
