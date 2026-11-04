import { useState } from "react";
import { IconVirusSearch } from "@tabler/icons-react";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/location";

const findLocation = (search) => {
  if (/^\d+$/.test(search)) {
    return axios.get(`${API_URL}/${search}`).then(({ data }) => data);
  }
  return axios
    .get(API_URL, { params: { name: search } })
    .then(({ data }) => data.results[0]);
};

const Location = ({ location, setLocation }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.idLocation.value.trim();

    if (!search) {
      setError("Type a location name or number.");
      return;
    }

    findLocation(search)
      .then((data) => {
        setLocation(data);
        setError("");
      })
      .catch((err) =>
        setError(
          err.response
            ? `No location found for "${search}".`
            : "Could not reach the Rick and Morty API. Try again."
        )
      );
  };

  return (
    <section className="bg-[url('/back.png')] bg-cover">
      <header className="flex justify-center mb-20">
        <img
          className="absolute w-[32%] animate-rotarrr mt-[-10%] bg-transparent"
          src="./vect1.png"
          alt=""
        />

        <img
          className="w-[60%] m-auto animate-flotar mt-5"
          src="./rick1.png"
          alt="Rick and Morty"
        />
      </header>

      <div className="mt-3 justify-center mb-16">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            placeholder="Location name or number"
            aria-label="Location name or number"
            name="idLocation"
            className="text-black border-2 border-[#8EFF8B] min-w-0 px-2"
            type="text"
          />
          <button
            type="submit"
            className="bg-[#8EFF8B] border-2 border-[#8EFF8B] flex gap-2 items-center text-black px-2"
          >
            Search <IconVirusSearch size={19} />
          </button>
        </form>
        {error && (
          <p role="alert" className="text-center text-red-400 mt-3">
            {error}
          </p>
        )}
      </div>

      <section className="border-2 border-[#8EFF8B] p-4">
        <h3 className="text-center text-[#8EFF8B] text-xl font-semibold font-mono mb-2 break-words">
          {location ? `Welcome to ${location.name}!` : "Loading location..."}
        </h3>

        <ul className="flex flex-col sm:flex-row sm:justify-between mx-4 sm:mx-20 text-[#938686] text-lg font-semibold font-mono">
          <li className="mb-2 sm:mb-0">Type: {location?.type}</li>
          <li className="mb-2 sm:mb-0">Dimension: {location?.dimension}</li>
          <li className="mb-2 sm:mb-0">Population: {location?.residents?.length}</li>
        </ul>
      </section>
    </section>
  );
};

export default Location;
