import { IconVirusSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-[url('./back.png')] bg-cover">
      <header className="flex justify-center mb-32">
        <img
          className="absolute w-[32%] animate-rotarrr mt-[-10%] bg-transparent]"
          src="./vect1.png"
          alt=""
        />

        <img
          className="w-[60%] m-auto animate-flotar mt-5"
          src="./rick1.png"
          alt=""
        />
      </header>

      <div className="mt-3 justify-center mb-16">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            placeholder="Type a New Location ..."
            name="idLocation"
            className="text-black border-2 border-[#8EFF8B]"
            type="number"
          />
          <button
            type="submit"
            className="bg-[#8EFF8B] border-2 border-[#8EFF8B] flex gap-2 items-center text-black"
          >
            Search <IconVirusSearch size={19} />
          </button>
        </form>
      </div>

      <section className="border-2 border-[#8EFF8B] p-4">
        <h3 className="text-center text-[#8EFF8B] text-xl font-semibold font-mono mb-2 break-words">
          ¡Welcome to {location?.name}!
        </h3>

        <ul className="flex flex-col sm:flex-row sm:justify-between mx-4 sm:mx-20 text-[#938686] text-lg font-semibold font-mono">
  <li className="mb-2 sm:mb-0">Type: {location?.type}</li>
  <li className="mb-2 sm:mb-0">Dimension: {location?.dimension}</li>
  <li className="mb-2 sm:mb-0">Population: {location?.residents.length}</li>
</ul>
      </section>
    </section>
  );
};
export default Location;
